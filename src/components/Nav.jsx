import React from "react"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/survey/1">Survey</NavLink>
      <NavLink to="/results">Result</NavLink>
      <NavLink to="/freelance">Freelance</NavLink>
    </>
  )
}

export default Nav
