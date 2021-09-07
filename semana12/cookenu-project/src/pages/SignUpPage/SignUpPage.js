import React from "react"
import { ScreenContainer, LogoImg, SignUpButton } from "./styled"
import logo from "../../assets/logo.png"
import { SignUpForm } from "./SignUpForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            <SignUpForm setRightButtonText={setRightButtonText}/>
            <SignUpButton>
            </SignUpButton>

        </ScreenContainer>
    )
}

// Gostaria de aproximar o botão de cadastrar do imput acima

export default SignUpPage