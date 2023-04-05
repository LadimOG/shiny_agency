import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import logo from "../../assets/dark-logo.png"

const StyledNavLink = styled(NavLink)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  &.active {
    background-color: ${colors.primary};
    border-radius: 30px;
    color: white;
    font-weight: bold;
  }
`
const NavBarStyled = styled.div`
background-color: #fff;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
padding: 10px;
`
const LogoImage = styled.img`
  width: 120px;
`

function NavBar() {
  return (
    <>
      <NavBarStyled>
        <div>
          <LogoImage src={logo} alt="logo" />
        </div>
        <nav>
          <StyledNavLink to="/">Accueil</StyledNavLink>
          <StyledNavLink to="/survey/1">Survey</StyledNavLink>
          <StyledNavLink to="/results">Result</StyledNavLink>
          <StyledNavLink to="/freelance">Freelance</StyledNavLink>
        </nav>
      </NavBarStyled>
    </>
  )
}

export default NavBar
