window.onload = setup;

function setup() {

  register_account_input = document.getElementById('account-name');
  register_account_display_input = document.getElementById('account-display-name');
  register_form = document.getElementById('register-form');

  login_account_input = document.getElementById('login-account-name');
  login_form = document.getElementById('login-form');

  register_form.addEventListener("submit", (e) => {
    e.preventDefault();
    register(
      register_account_input.value,
      register_account_display_input.value
    );
  });

  login_form.addEventListener("submit", (e) => {
    e.preventDefault();
    login(login_account_input.value);
  })

}

async function register(accountName, accountDisplayName) {

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

  window.location.href = "/app.html"
}

async function login(accountName) {

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
  window.location.href = "/app.html"
}
