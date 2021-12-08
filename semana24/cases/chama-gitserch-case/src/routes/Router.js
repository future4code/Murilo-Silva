import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SearchPage from "../pages/HomePage/SearchPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SearchPage />
                </Route>
                <Route exact path="/history">
                    <HistoryPage/>
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router