import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { pact_server_url } from '../utils/globals';
import SigninRegister from '../components/SigninRegister';

export default function TitleBar(props: any) {
    return(
        <>
            <header className="flex items-center justify-between px-4 py-2 bg-blue-100">
                <div className="flex items-center">
                    PactPics
                </div>
                { props.user ?
                  <div className="flex flex-row">
                    <div className="p-1">
                    <Link href="/admin">
                        <FontAwesomeIcon icon={faFileCode}/>
                    </Link>
                    </div>
                    <p className="p-1">{props.user}</p>
                    <p className="p-1" onClick={async (_) => await logout(props.setUser)}>Logout</p>
                  </div>
                  :

                  <SigninRegister setUser={props.setUser} />
                }
            </header>
        </>
    )
}

async function logout(setUser: any) {
    let res = await fetch(pact_server_url + "/logout");
    console.log(res);
    clearCookie("credentialId");
    clearCookie('account-name');
    clearCookie('public-key');
    setUser(undefined);
}

function clearCookie(name: string) {
    document.cookie = name + "=; Max-Age=-99999999;";
}
