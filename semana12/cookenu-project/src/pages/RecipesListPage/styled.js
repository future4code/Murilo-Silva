import styled from "styled-components"
import { Fab } from "@material-ui/core"

export const RecipeListContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: roe;
margin: 30px;
`
export const AddRecipeButton = styled(Fab)`
position: fixed;
right: 20px;
bottom: 20px;
z-index: 3;
`