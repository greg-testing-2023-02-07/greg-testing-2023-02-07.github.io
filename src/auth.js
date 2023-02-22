import {get, create} from './webauthn-json.js';
import { pact_server_url } from './globals';

export async function register(accountName, accountDisplayName) {

  if (accountDisplayName == "") {
    accountDisplayName = accountName;
  }

  const response = await fetch(pact_server_url + `/api/v1/auth/register/begin`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      accountName: accountName,
      accountDisplayName: accountDisplayName,
    }),
    credentials: "include"
  });

  if (! response.ok) {
    alert(await response.text())
    return
  }
  const jsonResponse = await response.json();

  const credential = await create({
    "publicKey": jsonResponse
  });

  const response2 = await fetch(pact_server_url + `/api/v1/auth/register/complete`, {
    credentials: "include",
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credential),
  });
  if (! response2.ok) {
    alert(await response2.text())
    return
  }
  const jsonResponse2 = await response2.json();
  console.log(JSON.stringify(jsonResponse2));
  document.cookie = "credentialId=" + credential.id;
    console.log("Set cookie");
  await setup_account_cookies();
}

export async function login(accountName) {
    console.log("login");

  const response = await fetch(pact_server_url + `/api/v1/auth/login/begin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(accountName),
    credentials: "include"
  });

  if (! response.ok) {
    alert(await response.text())
    return
  }
  const jsonResponse = await response.json();
    console.log("login response:");
    console.log(jsonResponse);

  const credential = await get({
    "publicKey": jsonResponse
  });

  const response2 = await fetch(pact_server_url + `/api/v1/auth/login/complete`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credential),
    credentials: "include"
  });

  if (! response2.ok) {
    alert(await response2.text())
    return
  }
  const jsonResponse2 = await response2.json()
  console.log(JSON.stringify(jsonResponse2));
  document.cookie = "credentialId=" + credential.id;
    console.log("Login Set cookie");
  await setup_account_cookies();
}

async function setup_account_cookies() {
  console.log("setup_account_cookies");
  const res = await fetch(pact_server_url + "/api/v1/auth/account-info", { credentials: "include" });
  if (!res.ok) {
    alert( await res.text() )
    return
  }
  const accountInfo = await res.json();
  const publicKey = accountInfo["public-key"];
  alert(publicKey);
  console.log("setting public-key cookie to " + publicKey);
  document.cookie = "public-key=" + publicKey;
  console.log("setting account-name cookie to " + accountInfo["accountName"]);
  document.cookie = "account-name=" + accountInfo["accountName"];
  console.log("finished setup_account_cookies");
}
