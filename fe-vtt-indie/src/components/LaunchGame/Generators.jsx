import { useState } from "react"
import { Accordion, Row } from "react-bootstrap"
import { randFaction, randObjective } from "../../GeneratorFunctions"
import FullMissionModal from "../GeneratorModals/FullMissionModal"
import SingleResponseGeneratorModal from "../GeneratorModals/SingleResponseGeneratorModal"





const Generators = () => {
const [missionModalShow, setMissionModalShow] = useState(false)
const [singleResponseModalShow, setSingleResponseModalShow] = useState(false)
const [episodeEventModalShow, setEpisodeEventModalShow] = useState(false)
const [selectedFunction, setSelectedFunction] = useState("")

const singleResponseModal = (functionName) => {
  setSelectedFunction(functionName.name)
  setSingleResponseModalShow(true)
}

    return (
      <>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Mission</Accordion.Header>
    <Accordion.Body>
      <Row className="flex-column">
      <button onClick={e => setMissionModalShow(true)}>new Mission</button>
      <br/>
      <button onClick={e => singleResponseModal(randFaction)}>Faction</button>
      <br/>
      <button onClick={e => singleResponseModal(randObjective)}>Objective</button>
      </Row>
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
 <SingleResponseGeneratorModal
 show={singleResponseModalShow}
 onHide={() => setSingleResponseModalShow(false)} 
 funcName={selectedFunction}/>
 </>
    )
}

export default Generators