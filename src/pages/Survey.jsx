import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function Survey() {
  const { questionNumber } = useParams()
  const questionInt = parseInt(questionNumber)
  const previousQuestion = questionInt - 1
  const nextQuestion = questionInt + 1

  return (
    <>
      <h1>Questionnaire 📝</h1>
      <h2>question {questionInt}</h2>
      {questionInt !== 1 ? (
        <Link to={`/survey/${previousQuestion}`}>précedent</Link>
      ) : null}
      {questionInt === 10 ? (
        <Link to="/results">Resultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestion}`}>suivant</Link>
      )}
    </>
  )
}

export default Survey
