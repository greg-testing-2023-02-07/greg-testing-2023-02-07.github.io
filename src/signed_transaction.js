import blake2b from 'blake2b';
import {encode as arrayBufferToBase64, decode} from 'base64-arraybuffer';
import { pact_server_url } from './globals';
import {get, base64urlToBuffer} from './webauthn-json.js';


async function tx(transactionCode) {

    // Get the logged-in user's public key and credentialId from the cookie.
    let publicKey = getCookie("public-key");
    let credentialId = getCookie("credentialId");

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
        signers: [signer],
        meta: {
            creationTime: 0,
            ttl: 0,
            gasLimit: 0,
            chainId: "",
            gasPrice: 0,
            sender: ""
        },
        nonce: "TODO"
    });

    const pactHash = mkPactHash(commandPayload);

    console.log("tx");
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
    console.log(options);
    const credential = await get(options);
    const resp = credential.response;
    console.log(credential);
    console.log(resp);
    const signaturePayload = {
        authenticatorData: arrayBufferToBase64(base64urlToBuffer(resp.authenticatorData)),
        clientDataJSON: resp.clientDataJSON,
        signature: arrayBufferToBase64(base64urlToBuffer(resp.signature))
    };

    const signer = {
        pubKey: getCookie("public-key")
    };

    const response = await fetch(pact_server_url + '/api/v1/tx', {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       cache: 'no-cache',
       body: JSON.stringify({
           hash: pactHash,
           sigs: [{sig: JSON.stringify(signaturePayload)}],
           cmd: commandPayload
       }),
       credentials: "include"
    });
    const resp_json = await response.json();
    return resp_json
}

function mkPactHash(input) {
    // Determine the Pact hash.
    var enc = new TextEncoder;
    var output = new Uint8Array(32); // TODO: Is 64 bytes the right hash length?
    const hash = blake2b(output.length).update(enc.encode(input)).digest();
    const pactHash = arrayBufferToBase64(hash).replaceAll("/","_").replaceAll("+","-");
    return pactHash
}

// Thanks to https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export { tx, mkPactHash, blake2b };
