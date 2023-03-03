import React, {useEffect, useState} from 'react';
import {tx, getCookie} from '../utils/signed_transaction';

export default function Picture(props : {id: string, src: string}) {
    return (
        <>
          <img className="h-40 p-1" src={props.src}/>
        </>
    )
}
