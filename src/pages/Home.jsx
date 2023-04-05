import React from "react"
import homeIllustration from "../assets/home-illustration.svg"
import styled from "styled-components"
import { colors } from "../utils/colors"

const ContainerHome = styled.div`
  height: 100vh;
  margin: 0 40px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const ContainerFirst = styled.div`
  height: 300px;
  width: 40%;
  min-width: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`
const TextStyled = styled.h1`
  font-size: 2rem;
`
const ButtonTest = styled.button`
  width: 200px;
  border: none;
  padding: 10px;
  border-radius: 50px;
  background-color: ${colors.primary};
  color: white;
  &:hover {
    box-shadow: 1px 3px 10px ${colors.secondary};
  }
  font-size: 1rem;
`
const ContainerSecond = styled.div`
  height: 300px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoIllustration = styled.img`
  width: 300px;
`

function Home() {
  return (
    <>
      <ContainerHome>
        <ContainerFirst>
          <TextStyled>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </TextStyled>
          <ButtonTest>faire le test</ButtonTest>
        </ContainerFirst>
        <ContainerSecond>
          <LogoIllustration src={homeIllustration} alt="logo home" />
        </ContainerSecond>
      </ContainerHome>
    </>
  )
}

export default Home
