import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from "./imgPerfil/fotoPerfil.jpg"
import DClogo from "./imgEXP/DClogo.jpg"
import Manue from "./imgEXP/Manue.jpg"
import local from "./imgInfo/local.jpg"
import email from "./imgInfo/emailLogo.jpg"
import styled from 'styled-components'

const ConfGerais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  `
  const PageSectionContainer = styled.div`
    width: 40vw;
    margin: 10px 0;
  `
  const nada = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  `
  const Titulos = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  `

function App() {

  return (
    <ConfGerais>
      <PageSectionContainer>
        <Titulos>Dados pessoais</Titulos>
        <CardGrande 
          imagem= {fotoPerfil} 
          nome="Murilo" 
          descricao="Oi, eu sou o Murilo. Sou estudante da Labenu. Ainda passo muito sufoco com JS mas o meu avanço é claro, para alguém que chegou a área totalmente cru, fico feliz em conseguir escrever aqui."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardGrande 
          imagem={email} 
          nome="E-mail" 
          descricao="murilo.o.paciente@gmail.com" 
        />
        
        <CardGrande 
          imagem={local} 
          nome="Endereço" 
          descricao="Lua." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Titulos>Experiências profissionais</Titulos>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Fritando neurônios com os projetos de sexta." 
        />
        
        <CardGrande 
          imagem={DClogo} 
          nome="DC Comics" 
          descricao="Apontando defeitos." 
        />
        
        <CardGrande 
          imagem={Manue} 
          nome="Manuê sucos" 
          descricao="Como Garçom freelancer" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Titulos>Minhas redes sociais</Titulos>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </ConfGerais>
  );
}

export default App;
