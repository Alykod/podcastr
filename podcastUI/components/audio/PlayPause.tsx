import React from 'react';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Play(props) {
    const {handlePress} = props;

    return (
        <button onClick={()=> handlePress()}>
            <FontAwesomeIcon icon={faPlayCircle} />
        </button>
    )
}



export function Pause(props) {
    const {handlePress} = props;

    return (
        <button onClick={()=> handlePress()}>
            <FontAwesomeIcon icon={faPauseCircle} />
        </button>
    )
}