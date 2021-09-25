import { Component } from 'react'
import Botao from '../../components/Botao'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: null
    }
    return(
      <div>
            <div className = 'Button'>
                <Botao Texto = "Logar"/>
            </div>
            <div className = 'Button'>
                <Botao Texto = "Criar nova conta"/>
            </div>
        </div>
    )
  }
}