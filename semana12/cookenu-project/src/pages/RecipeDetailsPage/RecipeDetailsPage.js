import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const RecipeDetailsPage = () => {
    useProtectedPage()
    return(
        <div>
            <h1>RecipeDetailsPage</h1>
        </div>
    )
}

export default RecipeDetailsPage