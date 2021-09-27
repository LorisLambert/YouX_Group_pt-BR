import React from 'react'

import Botao from '../../componentes/Botao'
import InputCampo from '../../componentes/InputCampo'

import './AtualizarPacientes.scss'

function CadastroPacientes(){
    return(
        <div className="cadastro">
            <div className="caixa-cadastro">
                <div className="area-cadastro">
                    <img alt="atualizar" src="https://img.icons8.com/ios/100/ffffff/edit-user-male.png" height="80px"/>
                    <h1>ATUALIZAR PACIENTE</h1>
                    <form>
                        <InputCampo resposta="Maria José" title="Nome completo:"/>
                        <InputCampo resposta="000.000.000-00" title="CPF:"/>
                        <InputCampo resposta="00/00/0000" title="Data de nascimento:"/>
                        <InputCampo resposta="Digite o valor em centimentros" title="Altura:"/>
                        <InputCampo resposta="Digite o valor em " title="Peso:"/>
                    </form>
                    <div>
                        <Botao/>
                        <Botao/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CadastroPacientes