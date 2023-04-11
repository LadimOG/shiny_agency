import { useContext } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error/index"
import styled from "styled-components"
import { colors } from "../utils/colors"
import { SurveyContext, ThemeContext } from "../utils/contexts"
import { useFetch } from "../utils/hooks"

const ContainerSurvey = styled.div`
  height: 100vh;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  margin: 20px 20px 0 20px;
  border-radius: 15px;
  background-color: ${({isDarkMode}) => isDarkMode === 'light' ? `${colors.backgroundLight}`  : "#2F2E41"};
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
const CustomLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.primary};
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
  color: ${colors.primary};
  background-color: ${({ isSelected }) =>
    !isSelected && colors.secondary};
  &:hover {
    box-shadow: 1px 3px 10px ${colors.secondary};
  }
  cursor: pointer;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionInt = parseInt(questionNumber)
  console.log(typeof(questionInt));
  const previousQuestion = questionInt - 1
  const nextQuestion = questionInt + 1

  const { answer, saveAnswer } = useContext(SurveyContext)
  const {theme} = useContext(ThemeContext)

  const { data, isLoading, error } = useFetch("http://localhost:8000/survey")
  const { surveyData } = data
  const saveReply = (answer) => {
    saveAnswer({
      [questionInt]: answer,
    })
  }
  
  return error ? (
    <Error />
  ) : (
    <ContainerSurvey isDarkMode={theme}>
      <h1 style={{textAlign: "center", marginBottom: 100}}>QUESTIONNAIRES 📝</h1>
      <h2>Question {questionNumber}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <ContainerQuestion>
          {surveyData && (
            <h3 style={{textAlign: "center"}}>{surveyData[questionInt]}</h3>
          )}
          {answer && (
            <ContainerResponse>
              <SurveyButton
                onClick={() => saveReply(true)}
                isSelected={answer[questionInt] === true}
              >
                OUI
              </SurveyButton>
              <SurveyButton
                onClick={() => saveReply(false)}
                isSelected={answer[questionInt] === false}
              >
                NON
              </SurveyButton>
            </ContainerResponse>
          )}
        </ContainerQuestion>
      )}
      <ContainerLink>
        {questionInt !== 1 && (
          <CustomLink to={`/survey/${previousQuestion}`}>précedent</CustomLink>
        )}
        {questionInt === 6 ? (
          <CustomLink to="/results">Resultats</CustomLink>
        ) : (
          <CustomLink to={`/survey/${nextQuestion}`}>suivant</CustomLink>
        )}
      </ContainerLink>
    </ContainerSurvey>
  )
}

export default Survey
