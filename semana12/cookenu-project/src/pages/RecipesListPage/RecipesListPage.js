import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL} from '../../constants/urls'
import { RecipeCard } from "../../components/RecipeCard/RecipeCard"
import { RecipeListContainer, AddRecipeButton } from "./styled"
import { Add } from "@material-ui/icons"
import { goToAddRecipes } from "../../routes/coordinator"
import { useHistory } from "react-router"


const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData ([], `${BASE_URL}/recipe/feed`)

    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
            key={recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClick={() => null}
            />
        )
    })


    
    return (
        <RecipeListContainer>
            {recipeCards}
            <AddRecipeButton
            color={"primary"}
            onClick={() => goToAddRecipes(history)}
            >
                <Add/>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage