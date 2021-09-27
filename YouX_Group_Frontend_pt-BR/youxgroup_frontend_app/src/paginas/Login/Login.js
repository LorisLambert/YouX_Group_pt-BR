import React from 'react'

import Botao from '../../componentes/Botao'
import InputCampo from '../../componentes/InputCampo'

import './Login.scss'

function Login(){
    return(
        <div className="login">
            <div className="caixa-login">
                <div className="area-login">
                    <img alt="cadeado" src="https://img.icons8.com/ios/100/ffffff/lock--v1.png" height="80px"/>
                    <h1>LOGIN</h1>
                    <form>
                        <InputCampo title="" resposta="Digite seu login"/>
                        <InputCampo title="" resposta="Digite sua senha"/>
                    </form>
                    <div>
                        <Botao title="ENTRAR"/>
                    </div>
                    <p>Não possui cadastro?</p>
                    <div>
                        <Botao title="CRIAR" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login