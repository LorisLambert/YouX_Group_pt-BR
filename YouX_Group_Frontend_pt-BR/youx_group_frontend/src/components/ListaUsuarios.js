import React, { Component } from "react";

class ListaUsuarios extends Component {
    constructor(props){
        super()
        this.state = {
            
        }
    }
    render(){
        return(
            <div>
                <h3>Lista de Médicos e Enfermeiros</h3>
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
export default ListaUsuarios