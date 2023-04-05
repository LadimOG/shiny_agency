import React from "react"
import styled, { keyframes } from "styled-components"
import { colors } from "../../utils/colors"

const rotate = keyframes `
    0% {
        transform : rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`
const StyleLoader = styled.div`
    width: 90px;
    height: 90px;
    border: 7px solid ${colors.primary};
    border-radius: 100%;
    border-bottom-color: transparent;
    animation: ${rotate} 1s linear infinite;
`

function Loader() {
  return <StyleLoader></StyleLoader>
}

export default Loader
