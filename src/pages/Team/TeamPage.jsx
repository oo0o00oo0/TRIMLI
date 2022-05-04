import styled from "styled-components"
import { isMobile } from "react-device-detect"

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
  const Imgs = [1, 2, 3, 4]

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
            <Header e={e} i={i} />
          </>
        ))}
      </Info>
      {isMobile ? (
        <ImgWrapperMob>
          {Imgs.map((n) => (
            <ImgWrapper>
              <Img
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/heads/${n}.jpg)`,
                }}
              />
              <PhotoNumber>0{n}</PhotoNumber>
            </ImgWrapper>
          ))}
        </ImgWrapperMob>
      ) : (
        <ImgshotsWrapper>
          {Imgs.map((n) => (
            <ImgWrapper>
              <Img
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/heads/${n}.jpg)`,
                }}
              />
              <PhotoNumber>0{n}</PhotoNumber>
            </ImgWrapper>
          ))}
        </ImgshotsWrapper>
      )}
    </FullPage>
  )
}

export function Header({ e, i }) {
  return (
    <HeaderWrapper>
      <Number>0{i}</Number>
      <ContentWrapper>
        <ImgerTitle>{e.name}</ImgerTitle>
        <ImgerPara>{e.p}</ImgerPara>
      </ContentWrapper>
    </HeaderWrapper>
  )
}

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const PhotoNumber = styled.div`
  font-size: ${isMobile ? 3 : 1.2}vw;

  padding-left: ${isMobile ? 4 : 16 / 2}px;
  padding-top: ${isMobile ? 5 : 5}px;
`

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: ${isMobile ? 16 : 30}px;
  box-sizing: border-box;
`

const ImgshotsWrapper = styled.div`
  position: absolute;
  right: 3rem;
  top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 60vh;
  width: 60vh;
  max-height: 500px;
  max-width: 700px;

  justify-content: center;
  align-items: center;
`
const ImgWrapperMob = styled.div`
  height: 40vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const Number = styled.div`
  flex: 1;
  font-size: 1.5rem;
  margin-right: ${isMobile ? 3 : 1.5}vw;
  font-size: ${isMobile ? 3 : 1.5}vw;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
const ImgerTitle = styled.div`
  margin-left: ${isMobile ? 3 : 1.5}vw;

  flex: 1;
  font-size: ${isMobile ? 4 : 2}vw;
`
const ImgerPara = styled.div`
  flex: 1;
  font-size: ${isMobile ? 3 : 1.5}vw;
  margin-top: 5px;
`

const HeaderWrapper = styled.div`
  font-family: IBMPlexSans-Regular;
  margin-bottom: 4rem;
  display: flex;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 30vw; */
  width: ${isMobile ? 70 : 30}vw;
  align-items: flex-start;
  justify-content: flex-start;
`

const FullPage = styled.div`
  height: ${isMobile ? 320 : 70}vw;
  /* height: ${isMobile ? 150 : 100}vh; */
  padding: ${isMobile ? 2 : 3}rem;
  color: #eaeaea;

  position: relative;
`

const Title = styled.div`
  color: #eaeaea;
  font-family: IBMPlexSans-Regular;
  font-size: ${isMobile ? 15 : 5}vw;
  margin-bottom: 2rem;
`
const Para = styled.div`
  text-align: left;
  color: #eaeaea;
  font-family: IBMPlexSans-Regular;
  font-size: ${isMobile ? 4.5 : 1.25}vw;
  margin-bottom: 4rem;
`

export default TeamPage
