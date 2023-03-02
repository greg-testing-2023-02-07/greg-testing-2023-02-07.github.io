import React, {useEffect, useState} from 'react';
import {tx, getCookie} from '../utils/signed_transaction';

export default function Picture(props : {id: string, src: string}) {
    return (
        <>
          <img src={props.src}/>
        </>
    )
}
