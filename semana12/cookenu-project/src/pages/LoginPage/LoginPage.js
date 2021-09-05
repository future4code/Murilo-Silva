import React from "react"
import { ScreenContainer, LogoImg, InputsContainer } from "./styled"
import logo from "../../assets/logo.png"
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'

const LoginPage = () => {

    const { form, onChange } = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        // value={form.email}
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
                        // value={form.password}
                        onChange={onChange}
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
        </ScreenContainer>
    )
}

export default LoginPage