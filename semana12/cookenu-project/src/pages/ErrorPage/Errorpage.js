import React from "react"
import { ErrorPageContainer, ErrorImg } from "./styled"
import ErrorPhoto from "../../assets/ErrorPhoto.png"
import { Typography } from "@material-ui/core"

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImg src={ErrorPhoto} />
            <Typography color={'primary'} variant={'h4'} align={'center'}> Erro 404 - Cadê a página cheff? </Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage