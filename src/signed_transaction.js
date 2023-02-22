import blake2b from 'blake2b';
import {encode as arrayBufferToBase64, decode} from 'base64-arraybuffer';
import { pact_server_url } from './globals';
import {get} from './webauthn-json.js';


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
    console.log(resp);
    const signaturePayload = {
        authenticatorData: arrayBufferToBase64(resp.authenticatorData),
        clientDataJSON: arrayBufferToBase64(resp.clientDataJSON),
        signature: arrayBufferToBase64(resp.signature)
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
