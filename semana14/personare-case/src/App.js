import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [baralho, setBaralho] = useState([])

  const listaDeCards = (() => {
    axios.get("tarot.json")

      .then((res) => {
        console.log(res.data)
        setBaralho(res.data.cards)
      })
      .catch((err) => {
        setBaralho(err.data)
      })
  })

  useEffect(() => {
    listaDeCards()
  })

  const tarotCards = baralho && baralho.map((item) => {
    return(
      <divkey={item.cards}>
        <h4> {item.name}</h4>
        <img src={`${imagesUrl}${item.image}`}/>
      </div>
    )
  })

  return (
    <div>

    </div>
  );
}

export default App;
