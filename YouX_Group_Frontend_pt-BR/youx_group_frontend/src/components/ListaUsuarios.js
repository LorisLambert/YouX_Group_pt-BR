import { Component } from 'react'

export default class ListaUsuarios extends Component {
    constructor(props) {
        super(props)
        this.state = {
          loading: false,
          error: null
        }
        return(
            <div>
                <h3>Lista de Usuários</h3>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Cargo</th>
                            </tr>
                        </thead>
                        <tbory>
                            {
                                this.state.usuarios.map(
                                    usuario =>
                                    <tr key = {usuario.id}>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.cpf}</td>
                                        <td>{usuario.cargo}</td>
                                    </tr>
                                )
                            }
                        </tbory>
                    </table>
                </div>
            </div>
        )
    }
}