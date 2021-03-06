import React from 'react'

import Botao from '../../componentes/Botao'
import InputCampo from '../../componentes/InputCampo'

import './CadastroUsuarios.scss'

function CadastroUsuarios(){
    return(
        <div className="cadastro">
            <div className="caixa-cadastro">
                <div className="area-cadastro">
                    <img alt="cadastrar" src="https://img.icons8.com/ios/100/ffffff/add-user-male.png" height="80px"/>
                    <h1>CADASTRAR USUÁRIO</h1>
                    <form>
                        <InputCampo resposta="Maria José" title="Nome completo:"/>
                        <InputCampo resposta="000.000.000-00" title="CPF:"/>
                        <InputCampo resposta="00/00/0000" title="Senha:"/>
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
export default CadastroUsuarios