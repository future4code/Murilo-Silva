import TextField from "@material-ui/core/TextField";
import React from "react";
import { InputsContainer, AddRecipeFormContainer } from "./styled"
import {createRecipe} from "../../services/recipe"
import useForm from "../../hooks/useForm";
import Botton from "@material-ui/core/Button"

export const AddRecipesForm = () => {

    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
            <InputsContainer>
            <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={"Título"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
            />
            <TextField
            name={"description"}
            value={form.description}
            onChange={onChange}
            label={"Descrição"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
            />
            <TextField
            name={"image"}
            value={form.image}
            onChange={onChange}
            label={"Foto"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
            />
            <Botton
            color={"primary"}
            variant={"contained"}
            type ={"submit"}
            fullWidth
            >
            Adicionar Receita
            </Botton>
            </InputsContainer>
            </AddRecipeFormContainer>
        </form>
    )
}