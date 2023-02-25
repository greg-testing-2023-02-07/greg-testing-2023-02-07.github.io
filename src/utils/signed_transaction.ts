import blake2b from 'blake2b';
import {encode as arrayBufferToBase64, decode} from 'base64-arraybuffer';
import { pact_server_url } from './globals';
import {get, base64urlToBuffer} from './webauthn-json.js';


async function tx(transactionCode: string, sign: boolean): Promise<any> {

    // Get the logged-in user's public key and credentialId from the cookie.
    let credentialId = getCookie("credentialId");

    const signer = {
        pubKey: getCookie("public-key")
    };

    // The payload signers will be populated if the function was called
    // with `sign`=true. Otherwise, we'll leave it empty.
    const signers = sign ? [signer] : [];

    var nonce = new Uint8Array(32);
    self.crypto.getRandomValues(nonce);

    const commandPayload = JSON.stringify({
        networkId: null,
        payload: {
            exec: {
                data: {
                    name: "Stuart",
                    language: "Pact"
                },
                code: transactionCode
            }
        },
        signers: signers,
        meta: {
            creationTime: 0,
            ttl: 0,
            gasLimit: 0,
            chainId: "",
            gasPrice: 0,
            sender: ""
        },
        nonce: arrayBufferToBase64(nonce)
    });

    const pactHash = mkPactHash(commandPayload);

    var signaturePayload = {};

    if (sign) {
      // Sign the transaction using the user's webauthn credential by presenting
      // the Pact hash as the challenge.
      const options = {
          publicKey: {
              challenge: pactHash,
              allowCredentials: [
                  {
                      id: credentialId,
                      type: "public-key"
                  }
              ],
              userVerification: "preferred"
          }
      };
      const credential = await get(options);
      const resp = credential.response;
      signaturePayload = {
          authenticatorData: arrayBufferToBase64(base64urlToBuffer(resp.authenticatorData)),
          clientDataJSON: resp.clientDataJSON,
          signature: arrayBufferToBase64(base64urlToBuffer(resp.signature))
      };
    }

    // sigs will be set to the webauthn-derived signature if the function was
    // called with `sigs`=true. Otherwise, we leave it empty.
    const sigs = sign ? { sig: JSON.stringify(signaturePayload) } : [];

    const response = await fetch(pact_server_url + '/api/v1/execute', {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       cache: 'no-cache',
       body: JSON.stringify({
           hash: pactHash,
           sigs: sigs,
           cmd: commandPayload
       }),
       credentials: "include"
    });
    const resp_json = await response.json();
    return resp_json
}

function mkPactHash(input: string) {
    // Determine the Pact hash.
    var enc = new TextEncoder;
    var output = new Uint8Array(32); // TODO: Is 64 bytes the right hash length?
    const hash = blake2b(output.length).update(enc.encode(input)).digest();
    const pactHash = arrayBufferToBase64(hash).replaceAll("/","_").replaceAll("+","-");
    return pactHash
}


// Thanks to https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export { tx, mkPactHash, blake2b };
