import styled from "styled-components"
import { isMobile } from "react-device-detect"

function WorkLayout({ project }) {
  console.log(project.id)
  return (
    <FullPage
      style={{
        height: `${isMobile ? project.pageHeightMob : project.pageHeight}vw`,
        minHeight: `100vh`,
      }}
    >
      <Info>
        <Header e={project} i={1} />
        <Para>{project.text}</Para>
      </Info>

      {isMobile ? (
        <ImgWrapperMob>
          {project.images.map((n) => (
            <ImgWrapper
              style={{
                gridColumn: n.gridCol,
                gridRow: n.gridRow,
              }}
            >
              <Img
                style={{
                  gridColumn: n.gridCol,
                  gridRow: n.gridRow,
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/projects/${project.id}/${n.name}.jpg)`,
                }}
              />
              <PhotoNumber>0{n.name}</PhotoNumber>
            </ImgWrapper>
          ))}
        </ImgWrapperMob>
      ) : (
        <ImgshotsWrapper>
          {project.images.map((n) => (
            <ImgWrapper
              style={{
                gridColumn: n.gridCol,
                gridRow: n.gridRow,
              }}
            >
              <Img
                style={{
                  gridColumn: n.gridCol,
                  gridRow: n.gridRow,
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/projects/${project.id}/${n.name}.jpg)`,
                }}
              />
              <PhotoNumber>0{n.name}</PhotoNumber>
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
  margin-left: ${isMobile ? 0 : 1.2}vw;

  flex: 1;
  font-size: ${isMobile ? 6 : 1.9}vw;
`
const ImgerPara = styled.div`
  flex: 1;
  font-size: ${isMobile ? 4 : 1.24}vw;
  margin-top: 5px;
`

const HeaderWrapper = styled.div`
  font-family: IBMPlexSans-Regular;
  margin-bottom: 4rem;
  display: flex;
`

export default WorkLayout

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: ${isMobile ? 5 : 20}px;

  box-sizing: border-box;
`

const FullPage = styled.div`
  padding: ${isMobile ? 2 : 3}rem;
  color: #eaeaea;
  position: relative;
`

const Para = styled.div`
  flex: 1;
  text-align: left;
  height: ${isMobile ? 5 : 7}vw;
  margin-bottom: 50px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: ${isMobile ? 70 : 30}vw;
  align-items: flex-start;
  justify-content: flex-start;
`

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const PhotoNumber = styled.div`
  font-size: ${isMobile ? 6 : 10}px;

  padding-top: ${isMobile ? 5 : 5}px;
`

const ImgshotsWrapper = styled.div`
  position: absolute;
  right: 3rem;
  top: 3rem;
  gap: 25px;

  height: 90vh;
  width: 80vh;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(11, 1fr);

  justify-content: center;
  align-items: center;
`
const ImgWrapperMob = styled.div`
  gap: 15px;

  height: 60vh;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(11, 1fr);
`
