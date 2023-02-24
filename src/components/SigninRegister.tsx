import React, { ChangeEvent, MouseEvent } from 'react';

import {get, create} from '../utils/webauthn-json.js';
import { pact_server_url } from '../utils/globals';

// TODO: At construction time, check for the auth-token in the cookie,
// since that should start us out in the logged-in state.

interface LoginState {
    loggedInAccount?: string;
    loggedInPublicKey?: string;
    accountNameForm: string;
}

export default class SigninRegister extends React.Component<{}, LoginState> {

    constructor(props: {accountName: string}) {
        super(props);
        this.state = { loggedInAccount: undefined, loggedInPublicKey: undefined, accountNameForm: "" };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        this.setState({ accountNameForm: value });
    }

    async handleRegister(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const {accountName, pubKey} = await register(this.state.accountNameForm);
        this.setState({ loggedInAccount: accountName, loggedInPublicKey: pubKey });
    }

    async handleLogin(event: MouseEvent<HTMLAnchorElement>) {
        alert("login, prevent default");
        event.preventDefault();
        const {accountName, pubKey} = await login(this.state.accountNameForm);
        this.setState({ loggedInAccount: accountName, loggedInPublicKey: pubKey });
    }

    async handleLogout(event: any) {
        this.setState({ loggedInAccount: undefined, loggedInPublicKey: undefined});
    }

    render() {
      return(
          <>
              <div className="flex-col" hidden={this.state.loggedInAccount? true : false}>
                  <div>
                      <input type="text" onChange={this.handleInputChange}/>
                  </div>
                  <div className="flex flex-row text-xs items-center">
                    <a href="" onClick={async (e) => {this.handleRegister(e)}}>Register</a>
                    <span>/</span>
                    <a href="" onClick={async (e) => {this.handleLogin(e)}}>Signin</a>
                  </div>
              </div>
              <div className="flex-col" hidden={this.state.loggedInAccount? false: true}>
                  <p>{this.state.loggedInAccount}</p>
                  <p>{this.state.loggedInPublicKey}</p>
                  <a href="" onClick={async (e) => {this.handleLogout(e)}}>Logout</a>
              </div>
          </>
      )
    }
}

async function register(accountName: string): Promise<{accountName: string, pubKey: string}> {

  const response = await fetch(pact_server_url + `/api/v1/auth/register/begin`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      accountName: accountName,
      accountDisplayName: accountName,
    }),
    credentials: "include"
  });

  if (! response.ok) {
    alert(await response.text());
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
    alert(await response2.text())
      throw new Error(await response.text())
  }
  const jsonResponse2 = await response2.json();
  console.log(JSON.stringify(jsonResponse2));
  document.cookie = "credentialId=" + credential.id;
    console.log("Set cookie");
    const accountInfo = await setup_account_cookies();

  return {accountName: accountInfo.accountName, pubKey: accountInfo.pubKey}
}

async function login(accountName: string): Promise<{accountName: string, pubKey: string}> {
    console.log("login");

  const response = await fetch(pact_server_url + `/api/v1/auth/login/begin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(accountName),
    credentials: "include"
  });

  if (! response.ok) {
    alert(await response.text())
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
    alert(await response2.text())
      throw new Error(await response2.text())
  }
  const jsonResponse2 = await response2.json()
  console.log(JSON.stringify(jsonResponse2));
  document.cookie = "credentialId=" + credential.id;
    console.log("Login Set cookie");
  const accountInfo = await setup_account_cookies();
  return { accountName: accountInfo.accountName, pubKey: accountInfo.pubKey }
}

async function setup_account_cookies(): Promise<{accountName: string, pubKey: string}> {
  console.log("setup_account_cookies");
  const res = await fetch(pact_server_url + "/api/v1/auth/account-info", { credentials: "include" });
  if (!res.ok) {
    alert( await res.text() )
      throw new Error(await res.text())
  }
  const accountInfo: any = await res.json();
  const publicKey = accountInfo["publicKeyHex"];
  alert(publicKey);
  console.log("setting public-key cookie to " + publicKey);
  document.cookie = "public-key=" + publicKey;
  console.log("setting account-name cookie to " + accountInfo["accountName"]);
  document.cookie = "account-name=" + accountInfo["accountName"];
  console.log("finished setup_account_cookies");
  return { accountName: accountInfo["accountName"], pubKey: publicKey }
}
