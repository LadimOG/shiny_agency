import { useContext } from "react"
import { SurveyContext, ThemeContext } from "../utils/contexts"
import styled from "styled-components"
import { colors } from "../utils/colors"
import { useFetch } from "../utils/hooks"
import Error from "../components/Error"
import { NavLink } from "react-router-dom"

const ContainerResults = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 20px 0 20px;
  border-radius: 15px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode === "light" ? `${colors.backgroundLight}` : "#2F2E41"};
`
const ButtonExplore = styled.button`
  width: 200px;
  border: none;
  padding: 10px;
  border-radius: 50px;
  background-color: ${colors.primary};
  color: white;
  &:hover {
    box-shadow: 1px 3px 10px ${colors.secondary};
  }
  font-size: 1rem;
`
const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
`

const ResultsTitle = styled.h2`
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`
const JobTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${colors.primary};
  margin-right: 5px;
  text-transform: capitalize;
`

function Results() {
  function queryParams(answer) {
    const answerNumbers = Object.keys(answer)
    return answerNumbers.reduce((acc, answerNumber, index) => {
      const isFirstAnswer = index === 0
      const separator = isFirstAnswer ? "" : "&"
      return `${acc}${separator}a${answerNumber}=${answer[answerNumber]}`
    }, "")
  }
  const { theme } = useContext(ThemeContext)
  const { answer } = useContext(SurveyContext)
  const fetchParams = queryParams(answer)

  const { data, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  )

  const resultsData = data?.resultsData

  if (error) {
    return <Error />
  }

  return (
    <ContainerResults isDarkMode={theme}>
      <FirstContainer>
        <ResultsTitle>
          Les compétences dont vous avez besoin: 
          {resultsData &&
            resultsData.map((result, index) => (
              <JobTitle key={`${result.title}-${index}`}>
                {result.title}
                {index === resultsData.length - 1 ? "" : ","}
              </JobTitle>
            ))}
        </ResultsTitle>
      </FirstContainer>
      <div>
        <ButtonExplore>Découvrez nos profils</ButtonExplore>
      </div>
      <div>
        <NavLink style={{color: 'whitesmoke'}} to="/freelance">Freelance</NavLink>
      </div>
    </ContainerResults>
  )
}

export default Results
