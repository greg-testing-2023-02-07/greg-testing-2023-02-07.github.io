import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';

export default function TitleBar(props: any) {
    return(
        <>
            <header className="flex items-center justify-between px-4 py-2 bg-blue-100">
                <div className="flex items-center">
                    Header
                </div>
                { props.user ?
                  <div>
                    <FontAwesomeIcon icon={faFileCode}/>
                    <p onClick={(e) => logout(props.setUser)}>Logout</p>
                  </div>
                  :
                  <p>No user</p>
                }
            </header>
        </>
    )
}

function logout(setUser: any) {
    clearCookie("account-name");
    clearCookie("public-key");
    setUser(undefined);
}

function clearCookie(name: string) {

}
