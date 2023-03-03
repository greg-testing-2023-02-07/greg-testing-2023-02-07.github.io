import React, { ChangeEvent, MouseEvent } from 'react';

import {get, create} from '../utils/webauthn-json.js';
import { tx } from "../utils/signed_transaction";
import { pact_server_url } from '../utils/globals';
import {useState} from 'react';

// TODO: At construction time, check for the auth-token in the cookie,
// since that should start us out in the logged-in state.

// interface LoginState {
//     loggedInAccount?: string;
//     loggedInPublicKey?: string;
//     accountNameForm: string;
// }

export default function SigninRegister(props : any) {

  const [user, setUser] =
    useState<{loggedInAccount: string | undefined, loggedInPublicKey: string | undefined}>(
      {loggedInAccount: undefined, loggedInPublicKey: undefined}
    );
  const [accountName, setAccountName] = useState<string>("");


      return(
          <>
              <div className="flex-col" hidden={user.loggedInAccount? true : false}>
                  <div>
                    <input type="text" onChange={(e) => setAccountName(e.target.value)}/>
                  </div>
                  <div className="flex flex-row text-xs items-center">
                    <a href="" onClick={async (e) => {
                      e.preventDefault();
                      const {accountNameRes, pubKeyRes} = await register(accountName);
                      setUser({ loggedInAccount: accountNameRes, loggedInPublicKey: pubKeyRes });
                      props.setUser(accountNameRes);
                    }}>Register</a>
                    <span>/</span>
                    <a href="" onClick={async (e) => {
                      e.preventDefault();
                      const {accountNameRes, pubKeyRes} = await login(accountName);
                      setUser({ loggedInAccount: accountNameRes, loggedInPublicKey: pubKeyRes });
                      props.setUser(accountNameRes);
                      // TODO: This will fail for fresh installs of pact-server, when the
                      // posts module has not not yet been installed.
                      let res = await tx("(accounts.create-account {accountName} (read-keyset \"sessionKeyset\" \"tmp.jpg\"))", false);
                    }}>Sign In</a>
                  </div>
              </div>
              <div className="flex-col" hidden={user.loggedInAccount? false: true}>
                  <p>{user.loggedInAccount}</p>
                  <p className="text-ellipsis">{user.loggedInPublicKey}</p>
                  <a href="" onClick={async (e) => {
                    await handleLogout(e);
                    setUser({loggedInAccount: undefined, loggedInPublicKey: undefined});
                  }}>Logout</a>
              </div>
          </>
      )
}

async function handleLogout(event: any) {
    const res = await fetch(pact_server_url + "/api/v1/auth/logout", { credentials: "include" });
    if (!res.ok) {
        throw new Error(await res.text());
    }
}

async function register(accountName: string): Promise<{accountNameRes: string, pubKeyRes: string}> {

  const response = await fetch(pact_server_url + `/api/v1/auth/register/begin`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      accountName: accountName,
      accountDisplayName: accountName,
    }),
    credentials: "include"
  }).catch((error) => {
      return error
  });

  if (! response.ok) {
      throw new Error(await response.text());
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
      throw new Error(await response.text())
  }
  const jsonResponse2 = await response2.json();
  console.log(JSON.stringify(jsonResponse2));
  document.cookie = "credentialId=" + credential.id;
    console.log("Set cookie");
    const accountInfo = await setup_account_cookies();

  return {accountNameRes: accountInfo.accountName, pubKeyRes: accountInfo.pubKey}
}

async function login(accountName: string): Promise<{accountNameRes: string, pubKeyRes: string}> {
    console.log("login");

  const response = await fetch(pact_server_url + `/api/v1/auth/login/begin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(accountName),
    credentials: "include"
  });

  if (! response.ok) {
      throw new Error(await response.text())
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
      throw new Error(await response2.text())
  }
  const jsonResponse2 = await response2.json()
  console.log(JSON.stringify(jsonResponse2));
  document.cookie = "credentialId=" + credential.id;
    console.log("Login Set cookie");
  const accountInfo = await setup_account_cookies();
  return { accountNameRes: accountInfo.accountName, pubKeyRes: accountInfo.pubKey }
}

async function setup_account_cookies(): Promise<{accountName: string, pubKey: string}> {
  console.log("setup_account_cookies");
  const res = await fetch(pact_server_url + "/api/v1/auth/account-info", { credentials: "include" });
  if (!res.ok) {
      throw new Error(await res.text())
  }
  const accountInfo: any = await res.json();
  const publicKey = accountInfo["publicKeyHex"];
  console.log("setting public-key cookie to " + publicKey);
  document.cookie = "public-key=" + publicKey;
  console.log("setting account-name cookie to " + accountInfo["accountName"]);
  document.cookie = "account-name=" + accountInfo["accountName"];
  console.log("finished setup_account_cookies");
  return { accountName: accountInfo["accountName"], pubKey: publicKey }
}
