import Card from "../components/Cards/index"
import styled from "styled-components"
import Loader from "../components/Loader"
import Error from "../components/Error"
import { useFetch } from "../utils/hooks"

const ContainaierFreelance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-bottom: 50px;
`
const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 20px;
`
function Freelance() {
  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/freelances"
  )

  const { freelancersList } = data

  return error ? (
    <Error />
  ) : (
    <ContainaierFreelance>
      <h1>👩🏻‍💻FREELANCES👨🏼‍💻</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ContainerCard>
          {freelancersList &&
            freelancersList.map((profil, index) => (
              <Card
                key={`${profil.name}-${index}`}
                label={profil.job}
                picture={profil.picture}
                title={profil.name}
              />
            ))}
        </ContainerCard>
      )}
    </ContainaierFreelance>
  )
}

export default Freelance
