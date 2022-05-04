import styled from "styled-components"
import Div100vh from "react-div-100vh"

const Names = [
  { name: "THEO PEJU", p: "Architect & Computational Designer" },
  {
    name: "IREM BUGDAYCI",
    p: "New media artist & interactive designer with a background in art history ",
  },
  {
    name: "MATTHEW OSBORNE",
    p: "Web Developer & 3d Artist with a background in architectural visualization",
  },
  {
    name: "RYAN K. ROSEN",
    p: "Architectural Designer with a background in international relations",
  },
]

function TeamPage() {
  return (
    <FullPage>
      <Info>
        <Title>TEAM</Title>
        <Para>
          We are a multidisciplinary team of architects, designers, artists and
          thinkers working at the forefront of innovative experiences ranging
          from the scale of an image to the built environment. Our diverse
          backgrounds bridge disciplines of art history, engineering, political
          sciences and architecture.{" "}
        </Para>
        {Names.map((e, i) => (
          <>
            <HeaderWrapper>
              <Number>0{i}</Number>
              <ContentWrapper>
                <HeaderTitle>{e.name}</HeaderTitle>
                <HeaderPara>{e.p}</HeaderPara>
              </ContentWrapper>
            </HeaderWrapper>
          </>
        ))}
      </Info>
    </FullPage>
  )
}

const Number = styled.div`
  flex: 1;
  font-size: 1.5rem;
  margin-right: 30px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
const HeaderTitle = styled.div`
  margin-left: 20px;

  flex: 1;
  font-size: 1.75rem;
`
const HeaderPara = styled.div`
  flex: 1;
  font-size: 1.5rem;
  margin-top: 5px;
`

const HeaderWrapper = styled.div`
  color: #eaeaea;
  font-family: IBMPlexSans-Regular;
  font-size: 3rem;
  margin-bottom: 4rem;
  display: flex;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: flex-start;
  justify-content: flex-start;
`

const FullPage = styled(Div100vh)`
  background: #121212;
  padding: 3rem;
`

const Title = styled.div`
  color: #eaeaea;
  font-family: IBMPlexSans-Regular;
  font-size: 5rem;
  margin-bottom: 4rem;
`
const Para = styled.div`
  text-align: left;
  color: #eaeaea;
  font-family: IBMPlexSans-Regular;
  font-size: 2rem;
  margin-bottom: 4rem;
`

export default TeamPage
