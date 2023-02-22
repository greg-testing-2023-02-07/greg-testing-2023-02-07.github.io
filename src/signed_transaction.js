import blake2b from 'blake2b';
import {encode as arrayBufferToBase64, decode} from 'base64-arraybuffer';
import { pact_server_url } from './globals';


async function tx(transactionCode) {

    // Get the logged-in user's public key and credentialId from the cookie.
    let publicKey = getCookie("publicKey");
    let credentialId = getCookie("credentialId");

    // Determine the Pact hash.
    var enc = new TextEncoder;
    var output = new Uint8Array(64); // TODO: Is 64 bytes the right hash length?
    const hash = blake2b(output.length).update(enc.encode(transactionCode)).digest();
    const pactHash = arrayBufferToBase64(hash);

    console.log("tx");
    // Sign the transaction using the user's webauthn credential by presenting
    // the Pact hash as the challenge.
    const options = {
        publicKey: {
            challenge: Uint8Array.from(pactHash, (c) => c.charCodeAt(0)),
            allowCredentials: [
                {
                    id: decode(credentialId),
                    type: "public-key"
                }
            ],
            userVerification: "required",
            rpId: "greg-testing-2023-02-07.github.io",
            timeout: 60000
        }
    };
    console.log(options);
    const credential = await navigator.credentials.get(options);
    const signaturePayload = {
        authenticatorData: arrayBufferToBase64(credential.response.authenticatorData),
        clientDataJSON: arrayBufferToBase64(credential.response.clientDataJSON),
        signature: arrayBufferToBase64(credential.response.signature)
    };

    const signer = {
        pubKey: getCookie("publicKey")
    };

    const response = await fetch(pact_server_url + '/api/v1/tx', {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       cache: 'no-cache',
       body: JSON.stringify({
           hash: pactHash,
           sigs: [JSON.stringify(signaturePayload)],
           cmd: JSON.stringify({
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
               signers: [JSON.stringify(signer)],
               meta: {
                   creationTime: 0,
                   ttl: 0,
                   gasLimit: 0,
                   chainId: "",
                   gasPrice: 0,
                   sender: ""
               },
               nonce: "TODO"
           })
       }),
       credentials: "include"
    });
    const resp_json = await response.json();
    return resp_json
}

// Thanks to https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default tx;
