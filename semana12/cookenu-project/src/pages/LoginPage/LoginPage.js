import React from "react"
import { ScreenContainer, LogoImg, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom"
import {goToSignUp} from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            <LoginForm setRightButtonText={setRightButtonText}/>
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