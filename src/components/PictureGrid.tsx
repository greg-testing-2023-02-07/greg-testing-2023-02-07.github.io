import React, {useEffect, useState} from 'react';
import {tx, getCookie} from '../utils/signed_transaction';
import Picture from './Picture';

export default function PictureGrid(props: {accountName: string | undefined, pictures: any, setPictures: any}) {


    useEffect(() => {
        // const accountName = getCookie("account-name");
        async function getPictures() {
            const res = await tx(`(accounts.get-pictures \"${props.accountName}\")`, false);
            props.setPictures(res.result.data);
            return res.result.data;
        }
        getPictures()
    }, []);

    return (
        <>
            <div className="flex flex-wrap justify-between">
            {props.pictures.map((picture: { id: string, src: string }) =>
                <Picture key={picture.id} id={picture.id} src={picture.src}/>)}
            </div>
        </>
    )
}
