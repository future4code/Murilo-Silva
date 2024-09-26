import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MegaSenaPage from "../pages/MegaSenaPage/MegaSenaPage"
import QuinaPage from "../pages/QuinaPage/QuinaPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DiaDeSorte from "../pages/DiaDeSorte/DiaDeSorte"
import LotoFacil from "../pages/LotoFacil/LotoFacil"
import LotoMania from "../pages/LotoMania/LotoMania"
import TimeMania from "../pages/TimeMania/TimeMania"

const Router = () => {
    return (  
        <Switch>
            <Route exact path = "/">
                <MegaSenaPage/>
            </Route>
            <Route exact path = "/quina">
                <QuinaPage/>
            </Route>
            <Route exact path = "/diadesorte">
                <DiaDeSorte/>
            </Route>
            <Route exact path = "/lotofacil">
                <LotoFacil/>
            </Route>
            <Route exact path = "/lotoMania">
                <LotoMania/>
            </Route>
            <Route exact path = "/timeMania">
                <TimeMania/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
            
        </Switch>
    )
}

export default Router