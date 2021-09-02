import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/Errorpage"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route exact path="/">
                    <RecipesListPage />
                </Route>
                <Route exact path="/adicionar-receitas">
                    <AddRecipesPage />
                </Route>
                <Route exact path="/detalhe/:id">
                    <RecipeDetailsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


export default Router