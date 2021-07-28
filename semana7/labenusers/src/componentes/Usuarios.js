import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`;

const headers = {
    headers: { 
    Authorization: "Murilo-Sousa-Lovelace" }
};


class Usuarios extends React.Component {

    state = { 
    objetoRes: []
    }



    listarUsuários = () => {
        axios
        .get(url, headers)
        .then((res) => {
        this.setState({objetoRes: res.data})
        })

    }

    componentDidMount = () => {
        this.listarUsuários()
    }

    deletaUsuario = (id) => {
        const urlLocalUsuario = `${url}/${id}`
        
        axios
        .delete(urlLocalUsuario, headers)
        .then((res) => {
            this.listarUsuários()
            alert ("Apagado")
        })
        .catch(() => {
            alert ("Falha!")
        })
    }


    render() {
  
        const renderizaUsuarios = this.state.objetoRes.map((item) => {
            return (
            <li key={item.id}> {item.name} <button onClick={() => this.deletaUsuario(item.id)}> X </button> </li>
             )
          })
            

        


        return (
            <div>
                
                <ul>
                {renderizaUsuarios}
                </ul>


            </div>



        )
    }

}

export default Usuarios