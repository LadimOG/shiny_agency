import React from "react"
import PropTypes from "prop-types"
import DefaulPicture from "../../assets/profile.png"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 100%;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
function Card({ label, picture, title }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt={`photo profil`} />
      <span>{title}</span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaulPicture,
}

export default Card
