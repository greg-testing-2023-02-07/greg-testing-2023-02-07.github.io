import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'
import { tx, getCookie } from '../utils/signed_transaction';

export default function MyAccount() {

    const [account, setAccount] = useState({ accountName: "", avatar: "", keyset: {keys: []} });

    useEffect(() => {
        const accountName = getCookie("account-name");
        async function getUser() {
            const res = await tx(`(accounts.get-account \"${accountName}\")`,false);
            console.log(res.result.data);
            var accountInfo = res.result.data;
            accountInfo['accountName'] = accountName;
            setAccount(res.result.data);
            return res.result.data;
        }
        getUser();
    }, []);

    return (
        <>
        <Head>
            <title>My Account</title>
        </Head>
        <main className={styles.main}>
            <div className="flex flex-col">

                <table className="table-fixed border-collapse">

                    <tbody>
                        <tr>
                            <td className="p-1 border border-black">Name</td>
                            <td className="p-1 border border-black">{account.accountName}</td>
                        </tr>
                        <tr>
                            <td className="min-w-full p-1 border border-black">PublicKey</td>
                            <td className="truncate max-w-sm p-1 border border-black">{account.keyset.keys[0]}</td>
                        </tr>
                        <tr>
                            <td className="min-w-full p-1 border border-black">Avatar</td>
                            <td className="truncate max-w-sm p-1 border border-black">{account.avatar}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        </>
    )
}

// export async function getStaticProps() {
//     const accountName = getCookie("account-name");
//     const res: any = await tx(`(accounts.get-account ${accountName})`, false);
//     const data: any = res.result.data;
//     return {
//         props: {
//             avatar: data.avatar,
//             accountName: accountName
//         }
//     }
// }
