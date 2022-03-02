import { useState } from "react"
import { Accordion } from "react-bootstrap"
import FullMissionModal from "../GeneratorModals/FullMissionModal"





const Generators = () => {
const [missionModalShow, setMissionModalShow] = useState(false)
const [episodeEventModalShow, setEpisodeEventModalShow] = useState(false)



    return (
      <>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Mission</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setMissionModalShow(true)}>new Mission</button>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Episode Events</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

 <FullMissionModal
 show={missionModalShow}
 onHide={() => setMissionModalShow(false)} />
 </>
    )
}

export default Generators