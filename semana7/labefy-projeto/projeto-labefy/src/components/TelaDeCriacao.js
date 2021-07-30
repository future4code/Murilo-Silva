import React from "react"
import axios from "axios"

export default class TelaDeCriacao extends React.Component {

    state = {
        nomePlaylist: ""
    }

    escolheNome = (event) => {
        this.setState({ nomePlaylist: event.target.value })
    }


    cadastraPlaylis = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomePlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: "Murilo-Sousa-Lovelace"
            }
        })
            .then((res) => {
                console.log(res)
                alert ("Sucesso!")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    render() {
        return (
            <div>
                <h2>Crie sua playlist</h2>
                <input
                    placeholder={"Nome da Playlist"}
                    value={this.state.nomePlaylist}
                    onChange={this.escolheNome}
                />
                <button onClick={this.cadastraPlaylis}> Adicionar </button>
            </div>
        )
    }




}
































