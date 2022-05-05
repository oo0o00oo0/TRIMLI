import "./App.css"

import styled from "styled-components"
import TitlePage from "./pages/Title/TitlePage"
import TeamPage from "./pages/Team/TeamPage"
import WorkLayout from "./components/WorkLayout/WorkLayout"
import { isMobile } from "react-device-detect"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const forme = {
  name: "PROJECT: Forme Sauvage",
  id: "forme",
  p: "Public Art Project",
  text: `Forme Sauvage is a sensory installation that acts as a refreshment
          from the warm and crouded streets of Montpellier in France. The
          project embodies the fluid and ephemeral nature of scents in its form,
          using innovative design methods such as thermal distortion to mould
          pink hued sheets. Suspended at the center of a courtyard, the
          installation fuctions as a a small weather machine and an air mister,
          surprising visitors by introducing unexpected dimensions of
          interaction through natural scents and ingredients weaved with design.`,
  images: [
    { name: 1, gridCol: "1 / span 5", gridRow: "1 / span 4" },
    { name: 2, gridCol: "1 / span 5", gridRow: "5 / span 4" },
    { name: 3, gridCol: "1 / span 5", gridRow: "9 / span 4" },
    { name: 4, gridCol: "6 / span 5", gridRow: "1 / span 5" },
    { name: 5, gridCol: "6 / span 5", gridRow: "6 / span 7" },
  ],
  pageHeight: 50,

  pageHeightMob: 260,
}

const palms = {
  name: "Project: Illuminated Palms",
  id: "palms",
  p: "Public Art & Lighting Design (Currently Under Development)",
  text: `Illuminated Palms is a pulic art project for a Cruise Port encompassing large scale lighting and screen design, digital art content, immersive gallery and community workshops. A gateway to the historic, vibrant city, the new port, which is the economic hub of the downtown core, is currently being transformed into a visual masterpiece that will convert the facility into one of the great waterfronts of the world. Initial renderings explore different design approaches of using LED bars to highlight architectural elements of the building versus using colorful LED lights to project on the mesh skin that would simultaneously function as shading.`,
  images: [
    { name: 1, gridCol: "1 / span 9", gridRow: "1 / span 4" },
    { name: 2, gridCol: "1 / span 9", gridRow: "5 / span 4" },
  ],
  pageHeight: 50,
  pageHeightMob: 240,
}
const festival = {
  name: "Project: The People's Lot for san diego open house festival ",
  id: "festival",
  p: "Public Installation (Currently Under Development)",
  text: `The People’s Lot is an exciting opportunity to bring together various social groups - children, parents, activists, English speakers, Spanish speakers, students, faculty and more - in both its design and function. Already a space for gardening and food production, concerts and protests, classrooms and leisure, the existing privately owned public oriented space is a beacon for community activity. As a new mixed-use building rises next door, designed by local architecture Professor Hector Perez, The People’s Lot is looking to leverage design as a vehicle to amplify its existing civic objectives.
`,
  images: [
    { name: 1, gridCol: "1 / span 9", gridRow: "1 / span 4" },
    { name: 2, gridCol: "1 / span 5", gridRow: "5 / span 4" },
    { name: 3, gridCol: "1 / span 5", gridRow: "9 / span 4" },
    { name: 4, gridCol: "6 / span 4", gridRow: "5 / span 8" },
  ],
  pageHeight: 50,

  pageHeightMob: 280,
}
const east = {
  name: "Project: Digital East",
  id: "east",
  p: "Interactive Installation and Website",
  text: `Digital East is a fully interactive and navigable application for use within marketing suites via touchscreen navigation.  The app introduced a smart Apartment Finder with real-time availability, unit spec, CGI stills, animations and 360 Tours. We created a fully explorable 3D representation of the scheme to be visited as both a digital and physical sales gallery.
Accessible from any device, anywhere in the world, Digital East was the prime tool for international sales of the development.`,
  images: [
    { name: 1, gridCol: "1 / span 9", gridRow: "1 / span 6" },
    { name: 2, gridCol: "1 / span 6", gridRow: "7 / span 4" },
    // { name: 3, gridCol: "1 / span 5", gridRow: "9 / span 4" },
    { name: 3, gridCol: "7 / span 3", gridRow: "7 / span 10" },
  ],
  pageHeight: 70,

  pageHeightMob: 2,
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <TitlePage />
              <TeamPage />
              <WorkLayout project={forme} />
              <WorkLayout project={palms} />
              <WorkLayout project={festival} />
              <WorkLayout project={east} />
            </Container>
          }
        />
        <Route path="skywall" element={<Skywall />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
function Skywall() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      ,
      <Frame
        title="t"
        src="https://irembugdayci.wixsite.com/skywall"
        frameborder="0"
      ></Frame>
    </div>
  )
}

const Frame = styled.iframe`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 999999;
`

const Container = styled.div`
  /* height: 900vh; */

  height: ${isMobile ? 800 : 900}vh;

  background: #121212;
`

export default App
