import React from "react";
import styled from "styled-components";
import axios from "axios";

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
    headers: { 
    Authorization: "Murilo-Sousa-Lovelace" }
};

class Cadastro extends React.Component {

    state = {
        usuarioNome: "",
        usuarioEmail: ""

    }


 onClickCadastro = () => {
    const body = {
        name: this.state.usuarioNome,
        email: this.state.usuarioEmail
    };

    axios
    .post(url, body, headers)
    .then((res) => {
        alert("Sucesso")
    })
    .catch((error) => {
        alert(error.response.data.message)
    });

    this.setState({usuarioNome: "", usuarioEmail: ""})
 }



 onChangeMudaNome = (event) => {
    this.setState({usuarioNome: event.target.value})

 }

 onChangeMudaEmail = (event) => {
     this.setState({usuarioEmail: event.target.value})
 }

    render() {
        return (
            <div>
                <p>Cadastre-se</p>
                <div>
                    <p> Nome: </p>
                    <input type='text'
                        value={this.state.usuarioNome}
                        onChange={this.onChangeMudaNome}
                    ></input>
                </div>
                <div>
                    <p> Email: </p>
                    <input type ='text'
                        value={this.state.usuarioEmail}
                        onChange={this.onChangeMudaEmail}
                    ></input>

                </div>
                <button
                onClick={this.onClickCadastro}
                > Salvar </button>



            </div>
        )
    }
}

export default Cadastro


// Armazenar valor digitado pelo usuario através do input no state.