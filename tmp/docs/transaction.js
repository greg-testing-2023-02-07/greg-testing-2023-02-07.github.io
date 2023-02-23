window.onload = setup;

function setup() {
    transaction_input = document.getElementById('transaction-input');
    transaction_form = document.getElementById('transaction-form');
    transaction_output = document.getElementById('transaction-output');

    transaction_output.innerHTML = "Output here";

    transaction_form.addEventListener("submit", (e) => {
        e.preventDefault();
        run_transaction( transaction_input.value, transaction_output );
    })
}

async function run_transaction(transaction_code, output_element) {
    const response = await fetch(pact_server_url + '/api/v1/tx', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: 'no-cache',
        body: JSON.stringify({
            hash: "none",
            sigs: [],
            cmd: JSON.stringify({
                networkId: null,
                payload: {
                    exec: {
                        data: {
                            name: "Stuart",
                            language: "Pact"
                        },
                        code: transaction_code
                    }
                },
                signers: [],
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
    output_element.innerHTML = JSON.stringify(resp_json, null, 2);
}

// Thanks to https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
