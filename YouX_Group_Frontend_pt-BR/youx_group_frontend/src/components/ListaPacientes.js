import React from "react";

class ListaPacientes extends Comment {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
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
export default ListaPacientes