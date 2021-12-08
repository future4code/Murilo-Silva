import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Router from "./routes/Router"
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

//correção de branch
