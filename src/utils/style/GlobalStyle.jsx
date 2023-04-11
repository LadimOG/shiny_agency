import { useContext } from "react"
import { ThemeContext } from "../contexts"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  body{
    width: 100vw;
    height: 100vh;
    padding-top: 88px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#2F2E41" : "#fff")};
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#2F2E41")};
    margin: 0;
  }
`

function StyleGlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <GlobalStyle isDarkMode={theme === "dark"} />
}

export default StyleGlobalStyle
