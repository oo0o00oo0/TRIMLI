import styled from "styled-components"
import Div100vh from "react-div-100vh"
import { isMobile } from "react-device-detect"

const titlebackdrop = "assets/images/titlebackdrop.jpg"

function TitlePage() {
  return (
    <Backdrop style={{ backgroundImage: `url(${titlebackdrop})` }}>
      <Title>
        STUDIO <br /> TRIMLI
      </Title>
    </Backdrop>
  )
}

const Title = styled.div`
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${isMobile ? 10 : 20}vh;
  font-family: NeueHaasDisplayLight;
  color: #fa5887;
  text-align: center;
`

// const Backdrop = styled(Div100vh)`
const Backdrop = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export default TitlePage
