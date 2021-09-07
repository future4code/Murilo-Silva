import React from "react";
import { InputsContainer } from "../LoginPage/styled";
import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import { SignUp } from "../../services/user";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { SignUpFormContainer } from "./styled"

export const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [ form, onChange, clear ] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        SignUp(form, clear, history, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                    />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                </InputsContainer>
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    margin={"none"}
                    fullWidth
                >
                    Cadastrar
                </Button>
            </SignUpFormContainer>
        </form>
    )
}