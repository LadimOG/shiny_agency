import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error/index"
import styled from "styled-components"
import { colors } from "../utils/colors"

const ContainerSurvey = styled.div`
  height: 100vh;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`
const ContainerQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContainerResponse = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`

const ContainerLink = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const SurveyButton = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: none;
  margin-right: 10px;
  font-weight: bold;
  &:hover {
    box-shadow: 1px 3px 10px ${colors.secondary};
  }
`

function Survey() {
  const [questions, setQuestions] = useState({})
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)

  const { questionNumber } = useParams()
  const questionInt = parseInt(questionNumber)
  const previousQuestion = questionInt - 1
  const nextQuestion = questionInt + 1

  useEffect(() => {
    async function fetchData() {
      setLoader(true)
      try {
        const response = await fetch("http://localhost:8000/survey")
        const { surveyData } = await response.json()
        setQuestions(surveyData)
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoader(false)
      }
    }
    fetchData()
  }, [])

  return error ? (
    <Error />
  ) : (
    <ContainerSurvey>
      <h1>Questionnaire 📝</h1>
      <h2>Question {questionNumber}</h2>
      {loader ? (
        <Loader />
      ) : (
        <ContainerQuestion>
          <h3 style={{ textAlign: "center" }}>{questions[questionInt]}</h3>
          <ContainerResponse>
            <SurveyButton>OUI</SurveyButton>
            <SurveyButton>NON</SurveyButton>
          </ContainerResponse>
        </ContainerQuestion>
      )}
      <ContainerLink>
        {questionInt !== 1 && (
          <Link to={`/survey/${previousQuestion}`}>précedent</Link>
        )}
        {questionInt === 6 ? (
          <Link to="/results">Resultats</Link>
        ) : (
          <Link to={`/survey/${nextQuestion}`}>suivant</Link>
        )}
      </ContainerLink>
    </ContainerSurvey>
  )
}

export default Survey
