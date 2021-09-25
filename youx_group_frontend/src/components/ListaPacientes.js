import { Component } from 'react'

export default class ListaPacientes extends Component {
    constructor(props) {
        super(props)
        this.state = {
          loading: false,
          error: null
        }
        return(
            <div>
                <h3>Lista de Pacientes</h3>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Data de Nascimento</th>
                                <th>Altura</th>
                                <th>Peso</th>
                                <th>UF</th>
                            </tr>
                        </thead>
                        <tbory>
                            {
                                this.state.pacientes.map(
                                    paciente =>
                                    <tr key = {paciente.id}>
                                        <td>{paciente.nome}</td>
                                        <td>{paciente.cpf}</td>
                                        <td>{paciente.dataNascimento}</td>
                                        <td>{paciente.altura}</td>
                                        <td>{paciente.peso}</td>
                                        <td>{paciente.uf}</td>
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