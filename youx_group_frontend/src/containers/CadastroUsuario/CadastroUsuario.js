import { Component } from 'react'
import Botao from '../../components/Botao'

export default class CadastroUsuario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: null
    }
    return(
        <div>
            <div className = 'Button'>
                <Botao Texto = "Salvar"/>
            </div>
            <div className = 'Button'>
                <Botao Texto = "Cancelar"/>
            </div>
        </div>
    )
  }
}