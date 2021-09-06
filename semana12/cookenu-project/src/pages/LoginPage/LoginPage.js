import React from "react"
import { ScreenContainer, LogoImg, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom"
import {goToSignUp} from "../../routes/coordinator"

const LoginPage = () => {
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            <LoginForm/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage