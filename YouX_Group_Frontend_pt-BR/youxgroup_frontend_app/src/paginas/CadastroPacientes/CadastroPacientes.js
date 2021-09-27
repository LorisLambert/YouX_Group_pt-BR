import React, {Component} from 'react'

import Botao from '../../componentes/Botao'
import InputCampo from '../../componentes/InputCampo'

import api from '../../api'

import './CadastroPacientes.scss'

export default class CadastroPacientes extends Component {
    state={uf:[]}

    async componentDidMount() {
        const response = await api.get('')

        console.log(response.data)

        this.setState({uf: response.data})
    }

    render() {

        const {uf} = this.state

        return (
        <div className="cadastro">
            <div className="caixa-cadastro">
                <div className="area-cadastro">
                    <img alt="cadastrar" src="https://img.icons8.com/ios/100/ffffff/add-user-male.png" height="80px"/>
                    <h1>CADASTRAR PACIENTE</h1>
                    <form>
                        <InputCampo resposta="Maria José" title="Nome completo:"/>
                        <InputCampo resposta="000.000.000-00" title="CPF:"/>
                        <InputCampo resposta="00/00/0000" title="Data de nascimento:"/>
                        <InputCampo resposta="Digite o valor em centimetros" title="Altura:"/>
                        <InputCampo resposta="Digite o valor em " title="Peso:"/>
                        <select className="select">
                            <option selected >--</option>
                            {uf.map(uf => (
                                <option key={uf.sigla.id} >{uf.sigla}</option>
                            ))}
                        </select>
                    </form>
                    <div>
                        <Botao title="VOLTAR"/>
                        <Botao title="CADASTRAR"/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}