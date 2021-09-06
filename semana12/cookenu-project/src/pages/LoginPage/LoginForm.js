import React from "react"
import { InputsContainer } from "./styled"
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'

const LoginForm = () => {

    const { form, handleInputChange } = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        senha={"Senha"}
                        label={"Password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"normal"}
                    >
                        Login
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm