import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useEffect, useState } from "react"
import {
    GeneralContainer,
    LeftCol,
    RightCol,
    TitleWrap,
    Title,
    LogoLoterias,
    NumbersWrap,
    GameTitle,
    GameNumberDate,
    Obs,
  } from "./styled.js"
  import logoLoterias from "../../constants/imagens/logo_cef.svg"
  import NumbersList from "../../components/Menu/NumbersList/NumbersList"

const MegaSenaPage = () => {

    const [relacaoConcurso, setRelacaoConcurso] = useState([])
    const [concursoId, setConcursoId] = useState("")
    const [concursos, setConcursos] = useState([])

    const getRelacaoConcursos = () => {
        axios
            .get(`${BASE_URL}/loterias-concursos`)
            .then((res) => {
                setRelacaoConcurso(res.data[0])
                if (relacaoConcurso) {
                    setConcursoId(res.data[0].concursoId)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getConcursosById = (id) => {
        axios
            .get(`${BASE_URL}/concursos/${id}`)
            .then((res) => {
                setConcursos(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getRelacaoConcursos()
    }, [])

    useEffect(() => {
        if (concursoId) getConcursosById(concursoId)
    }, [concursoId])

    const data = new Date(concursos?.data)
    const formatedDate = data.toLocaleDateString("pt-BR", { timeZone: "UTC" })

    return (
        <GeneralContainer>
      <LeftCol></LeftCol>
      <TitleWrap>
        <LogoLoterias src={logoLoterias} />
        <Title>MEGA-SENA</Title>
      </TitleWrap>
      <GameTitle>
        <p>CONCURSO</p>
      </GameTitle>
      <GameNumberDate>
        <p>
          {concursos.id} - {data && formatedDate}
        </p>
      </GameNumberDate>
      <RightCol>
        <NumbersWrap>
          <ul>
            {concursos.numeros &&
              concursos.numeros.map((item) => (
                <NumbersList numbers={item} key={item} />
              ))}
          </ul>
        </NumbersWrap>
        <Obs>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </Obs>
      </RightCol>
    </GeneralContainer>
        // <div>
        //     Mega Sena
        // </div>
    )
}

export default MegaSenaPage