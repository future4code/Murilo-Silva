import React from 'react';
import styled from 'styled-components'



const BigCardContainer = styled.div`
 display: flex;
 align-items: center;
 border: 1px solid black;
 padding: 20px 10px;
 margin-bottom: 10px;
 height: 125px;
`

const Imagem = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`

const SegundaDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const Nome1 = styled.h4`
margin-bottom: 15px;
`


function CardGrande(props) {

    return (
        <BigCardContainer>
            <Imagem src={props.imagem} />
            <SegundaDiv>
                <Nome1>{props.nome}</Nome1>
                <p>{props.descricao}</p>
            </SegundaDiv>
        </BigCardContainer>
    )
}

export default CardGrande;