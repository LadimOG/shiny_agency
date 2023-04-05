import { useContext } from "react"
import { ThemeContext } from "../../utils/contexts"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const ContainerFooter = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  background-color: black;
`
const NightButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <ContainerFooter>
      <NightButton onClick={() => toggleTheme()}>
        Changer de mode {theme === "light" ? "✳︎": "🌙"}
      </NightButton>
    </ContainerFooter>
  )
}

export default Footer
