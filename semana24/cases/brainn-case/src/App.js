import Router from "./routes/Router";
import MegaSenaPage from "./pages/MegaSenaPage/MegaSenaPage";
import QuinaPage from "./pages/QuinaPage/QuinaPage";
import theme from "./constants/theme";
import axios from "axios";
import { BASE_URL } from "./constants/urls"
import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu"
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [loterias, setLoterias] = useState([])
  console.log("App renderizado com sucesso", loterias)

  const getLoterias = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setLoterias(res.data)
      }).catch((error) => {
        console.log(error)
      })
  }
  
  useEffect(() => {
    getLoterias()
  }, [])

  return (
    <BrowserRouter>
      Brainn
      <Menu data={loterias} />
      <Router />
    </BrowserRouter>
  );
}

export default App;
