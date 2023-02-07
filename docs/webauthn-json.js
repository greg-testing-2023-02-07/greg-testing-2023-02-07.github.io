/**
 * Minified by jsDelivr using Terser v5.15.0.
 * Original file: /npm/@github/webauthn-json@2.0.1/dist/esm/webauthn-json.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function base64urlToBuffer(e){const t="==".slice(0,(4-e.length%4)%4),r=e.replace(/-/g,"+").replace(/_/g,"/")+t,i=atob(r),n=new ArrayBuffer(i.length),o=new Uint8Array(n);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);return n}function bufferToBase64url(e){const t=new Uint8Array(e);let r="";for(const e of t)r+=String.fromCharCode(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}var copyValue="copy",convertValue="convert";function convert(e,t,r){if(t===copyValue)return r;if(t===convertValue)return e(r);if(t instanceof Array)return r.map((r=>convert(e,t[0],r)));if(t instanceof Object){const i={};for(const[n,o]of Object.entries(t)){if(o.derive){const e=o.derive(r);void 0!==e&&(r[n]=e)}if(n in r)null!=r[n]?i[n]=convert(e,o.schema,r[n]):i[n]=null;else if(o.required)throw new Error(`Missing key: ${n}`)}return i}}function derived(e,t){return{required:!0,schema:e,derive:t}}function required(e){return{required:!0,schema:e}}function optional(e){return{required:!1,schema:e}}var publicKeyCredentialDescriptorSchema={type:required(copyValue),id:required(convertValue),transports:optional(copyValue)},simplifiedExtensionsSchema={appid:optional(copyValue),appidExclude:optional(copyValue),credProps:optional(copyValue)},simplifiedClientExtensionResultsSchema={appid:optional(copyValue),appidExclude:optional(copyValue),credProps:optional(copyValue)},credentialCreationOptions={publicKey:required({rp:required(copyValue),user:required({id:required(convertValue),name:required(copyValue),displayName:required(copyValue)}),challenge:required(convertValue),pubKeyCredParams:required(copyValue),timeout:optional(copyValue),excludeCredentials:optional([publicKeyCredentialDescriptorSchema]),authenticatorSelection:optional(copyValue),attestation:optional(copyValue),extensions:optional(simplifiedExtensionsSchema)}),signal:optional(copyValue)},publicKeyCredentialWithAttestation={type:required(copyValue),id:required(copyValue),rawId:required(convertValue),authenticatorAttachment:optional(copyValue),response:required({clientDataJSON:required(convertValue),attestationObject:required(convertValue),transports:derived(copyValue,(e=>{var t;return(null==(t=e.getTransports)?void 0:t.call(e))||[]}))}),clientExtensionResults:derived(simplifiedClientExtensionResultsSchema,(e=>e.getClientExtensionResults()))},credentialRequestOptions={mediation:optional(copyValue),publicKey:required({challenge:required(convertValue),timeout:optional(copyValue),rpId:optional(copyValue),allowCredentials:optional([publicKeyCredentialDescriptorSchema]),userVerification:optional(copyValue),extensions:optional(simplifiedExtensionsSchema)}),signal:optional(copyValue)},publicKeyCredentialWithAssertion={type:required(copyValue),id:required(copyValue),rawId:required(convertValue),authenticatorAttachment:optional(copyValue),response:required({clientDataJSON:required(convertValue),authenticatorData:required(convertValue),signature:required(convertValue),userHandle:required(convertValue)}),clientExtensionResults:derived(simplifiedClientExtensionResultsSchema,(e=>e.getClientExtensionResults()))},schema={credentialCreationOptions:credentialCreationOptions,publicKeyCredentialWithAttestation:publicKeyCredentialWithAttestation,credentialRequestOptions:credentialRequestOptions,publicKeyCredentialWithAssertion:publicKeyCredentialWithAssertion};function createRequestFromJSON(e){return convert(base64urlToBuffer,credentialCreationOptions,e)}function createResponseToJSON(e){return convert(bufferToBase64url,publicKeyCredentialWithAttestation,e)}async function create(e){return createResponseToJSON(await navigator.credentials.create(createRequestFromJSON(e)))}function getRequestFromJSON(e){return convert(base64urlToBuffer,credentialRequestOptions,e)}function getResponseToJSON(e){return convert(bufferToBase64url,publicKeyCredentialWithAssertion,e)}async function get(e){return getResponseToJSON(await navigator.credentials.get(getRequestFromJSON(e)))}function supported(){return!!(navigator.credentials&&navigator.credentials.create&&navigator.credentials.get&&window.PublicKeyCredential)};
//# sourceMappingURL=/sm/a51e3f71b78aa9350ae4e471d497a61588cfaa1126a8a052cc430a951a6e823c.map