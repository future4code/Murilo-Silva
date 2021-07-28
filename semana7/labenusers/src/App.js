import React from "react";
import Cadastro from "./componentes/Cadastro.js";
import Usuarios from "./componentes/Usuarios.js";


class App extends React.Component {
  state = {

    telaHome: false,

  };


 onClickMudaTela = (event) => {
  this.setState({telaHome: !this.state.telaHome})
 }


  render () {



    return (
      <div>
        {this.state.telaHome === true ? <Usuarios/> : <Cadastro/>}
          <button
          onClick= {this.onClickMudaTela}
          > {this.state.telaHome === true ? "Página inicial" : "Ver Usuários"} </button>

      </div>
      )

  }
}

export default App;
























