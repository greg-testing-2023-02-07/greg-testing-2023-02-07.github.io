import { useEffect, useState } from 'react';
import {tx} from "../utils/signed_transaction";

export default function UserListing(props: any) {
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        async function getUsers() {
            const res = await tx(`(accounts.list-accounts)`, false);
            setUsers(res.result.data);
            console.log(res.result.data);
            return res.result.data;
        }
        getUsers()
    }, []);

    return (
        <>
          <div className="flex flex-row">
            {userListSelfPromoted(props.user, users).map((user: string) =>
                <span
                    className={user == props.picturesOwner ? "p-1" : "p-1 text-slate-500"}
                    onClick={(_) => handleOwnerClick(user, props.setPicturesOwner)}
                    key={user}
                >
                    {(user == props.user) ? "Me" : user}
                </span>

            )}
          </div>
        </>
    )
}

function userListSelfPromoted(loggedInUser: string, users: string[]): string[] {
    const otherUsers : string[] = users.filter((u) => u != loggedInUser);
 return [loggedInUser, ...otherUsers]
}

function handleOwnerClick(owner : string, setPicturesOwner: any) {
    console.log("handleOwnerClick: " + owner);
    setPicturesOwner(owner);
}
