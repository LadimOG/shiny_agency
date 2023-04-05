import React, { useEffect, useState } from "react"
import Card from "../components/Cards/index"
import styled from "styled-components"
import Loader from "../components/Loader"
import Error from "../components/Error"

const ContainaierFreelance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`
function Freelance() {
  const [profiles, setProfiles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchProfil() {
      setIsLoading(true)
      try {
        const response = await fetch("http://localhost:8000/freelances")
        const {freelancersList} = await response.json()
        setProfiles(freelancersList)
      } catch (error) {
        console.log(error);
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProfil()
  }, [])


  return  error ? <Error /> :(
    <ContainaierFreelance >
      <h1>👩🏻‍💻Freelances👨🏼‍💻</h1>
      {isLoading ? <Loader /> :(
      <ContainerCard>
        {profiles.map((profil, index) => (
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
