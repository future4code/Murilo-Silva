import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MegaSenaPage from "../pages/MegaSenaPage/MegaSenaPage"
import QuinaPage from "../pages/QuinaPage/QuinaPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path = "/">
                <MegaSenaPage/>
            </Route>
            <Route exact path = "/quina">
                <QuinaPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
            
        </Switch>
        </BrowserRouter>
    )
}

export default Router