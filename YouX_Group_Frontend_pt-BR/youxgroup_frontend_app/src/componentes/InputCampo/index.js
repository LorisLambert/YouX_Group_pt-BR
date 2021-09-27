import React from 'react'

import './InputCampo.scss'

export default function index(props) {
    return (
        <div>
            <label for="nome">{props.title}</label>
            <input type="text" placeholder={props.resposta}></input>
        </div>
        
    )
}
