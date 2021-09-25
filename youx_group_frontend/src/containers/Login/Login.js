import { Component } from 'react'
import Botao from '../../components/Botao'

export default class Login extends Component {

  constructor() {

    return(
      <div className="Login">
        <Botao Texto = "Logar"/>
        <Botao Texto = "Criar nova conta"/>
      </div>
    )
  }
}