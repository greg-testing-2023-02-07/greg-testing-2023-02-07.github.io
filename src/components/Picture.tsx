import React, {useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFull } from '@fortawesome/free-solid-svg-icons';

import {tx, getCookie} from '../utils/signed_transaction';

export default function Picture(props : {user: string, id: string, src: string, likes: string[]}) {
    console.log(props);
    const initiallyLiked = props.likes?.find((x) => x == props.user) != undefined;
    const [liked, setLiked] = useState<boolean>(initiallyLiked);
    return (
        <>
            <div className="p-1 relative shadow-lg" >
              <img className="h-40" src={props.src}/>
              <div className="absolute bottom-2 right-2 text-red-500 opacity-90 hover:opacity-100"
                   onClick={async (e) => await handleLike(props.user, props.id, setLiked)}
              >
              <FontAwesomeIcon icon={liked ? heartFull : heartEmpty}/>
              </div>
            </div>
        </>
    )
}

async function handleLike(user: string, pictureId: string, setLiked: any) {
    setLiked(true);
    await tx(`(accounts.like-picture \"${user}\" \"${pictureId}\")`, false);
}
