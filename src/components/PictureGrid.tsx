import React, {useEffect, useState} from 'react';
import {tx, getCookie} from '../utils/signed_transaction';
import Picture from './Picture';

export default function PictureGrid(props: {accountName: string | undefined, pictures: any, setPictures: any, user: string}) {


    useEffect(() => {
        // const accountName = getCookie("account-name");
        console.log(`About to fetch pictures for ${props.accountName}.`);
        async function getPictures() {
            const res = await tx(`(accounts.get-pictures \"${props.accountName}\")`, false);
            props.setPictures(res.result.data);
            return res.result.data;
        }
        getPictures()
    }, [props.accountName]);
    console.log("PICTURES");
    console.log(props.pictures);

    return (
        <>
            <div className="flex flex-wrap justify-between">
            {props.pictures.map((picture: { "picture-id": string, src: string, likes: string[] }) =>
                <Picture key={picture["picture-id"]} id={picture["picture-id"]} src={picture.src} likes={picture.likes} user={props.user}/>)}
            </div>
        </>
    )
}
