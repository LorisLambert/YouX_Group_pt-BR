import { Component } from 'react'

export default class Botao extends Component {

    constructor(props) {

        return(
        <div className="Botao">
            <button>{props.Texto}</button>
        </div>
        )
    }
}
