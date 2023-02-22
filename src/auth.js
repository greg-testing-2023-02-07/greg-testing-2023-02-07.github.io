import {get, create} from './webauthn-json.js';

const pact_server_url = "https://beanstalk.greg-testing-2023-02-07.com"

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

}
