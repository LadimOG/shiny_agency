import React from "react"
import logo404 from "../../assets/404.svg"
import { colors } from "../../utils/colors"
import styled from "styled-components"

const ContainerError = styled.div`
  height: 100vh;
  background-color: ${colors.backgroundLight};
  border-radius: 15px;
  margin: 40px 20px 0 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  grid-auto-columns: 20px;
  justify-content: center;
  align-items: center;
`
const ImageError = styled.img`
  width: 50%;
`

const TextError = styled.h3`
  text-align: center;
  padding: 20px;
`

function Error() {
  return (
    <ContainerError>
      <TextError>Oupss...</TextError>

      <ImageError src={logo404} alt="" />

      <TextError>La page n'as pas été trouvé!!!</TextError>
    </ContainerError>
  )
}

export default Error
