import React, {useEffect, useState} from 'react';
import {tx, getCookie} from '../utils/signed_transaction';
import Picture from './Picture';

export default function PictureGrid(pictureOwnerAccount: string) {

    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const accountName = getCookie("account-name");
        async function getPictures() {
            const res = await tx(`(accounts.get-pictures \"${pictureOwnerAccount}\")`, false);
            setPictures(res.result.data);
            return res.result.data;
        }
        getPictures()
    }, []);

    return (
        <>
            <div>
                {pictures.map((picture: { id: string, src: string }) => <Picture  id={picture.id} src={picture.src}/>)}
            </div>
        </>
    )
}
