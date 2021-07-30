import userEvent from "@testing-library/user-event"
import axios from "axios"
import React from "react"
import styled from "styled-components"

const CardPlaylist = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

export default class TelaListaPlaylists extends React.Component {
    state = {
        playlists: []
    }


    componentDidMount(){
        this.getPlaylists()
    }
    

    getPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "Murilo-Sousa-Lovelace"
            }
        })
        .then((res) => {
            this.setState({playlists: res.data})
        })
        .catch((err) => {
            alert("Ocoreeu um erro, tente novamente!")
        })
    }


    render() {
        const todasPlaylists = this.state.playlists.map((playlist) => {
            return <CardPlaylist key={playlist.id}>{playlist.name}</CardPlaylist>
            
        })

        
        return(
            <div>

            </div>
        )
    }


}