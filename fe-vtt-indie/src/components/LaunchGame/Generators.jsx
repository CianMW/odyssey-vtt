import { useState } from "react"
import { Accordion, Row } from "react-bootstrap"
import { featureAspect, featureOfInterest, planetType, randAesthetic, randBearing, randDepth, randDifficulty, randEncounter, randFaction, randFlavour, randLocation, randLocationAspect, randLoomingThreat, randMission, randMonsterAspect, randMonsterBearing, randMonsterHazard, randMonsterSize, randMonsterType, randObjective, randOpposition, randOppositionAgenda, randPurpose, randRuinType, randScuffle, randSnag, randSocial, randTactic, randTreasure, speciesPrefix, speciesSuffix } from "../../GeneratorFunctions"
import SciFiButton from "../../SingleComponents/SciFiButton"
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
      <br/>
      <SciFiButton genName={"Faction"} currentFunction={randFaction} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Objective"} currentFunction={randObjective} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Mission"} currentFunction={randMission} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Location"} currentFunction={randLocation} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Location Aspect"} currentFunction={randLocationAspect} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Opposition"} currentFunction={randOpposition} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Opposition Agenda"} currentFunction={randOppositionAgenda} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"The Snag"} currentFunction={randSnag} singleResponseModal={singleResponseModal}/>
      </Row>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Episode Events</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"A Scuffle"} currentFunction={randScuffle} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Tactic"} currentFunction={randTactic} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Social"} currentFunction={randSocial} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Bearing"} currentFunction={randBearing} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Encounter"} currentFunction={randEncounter} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Difficulty"} currentFunction={randDifficulty} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Flavour"} currentFunction={randFlavour} singleResponseModal={singleResponseModal}/>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Galactic Guidebook</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Planet Type"} currentFunction={planetType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Species Prefix"} currentFunction={speciesPrefix} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Species Suffix"} currentFunction={speciesSuffix} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Feature Aspect"} currentFunction={featureAspect} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Feature Of Interest"} currentFunction={featureOfInterest} singleResponseModal={singleResponseModal}/>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Star Ruins & Space Hulks</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Type"} currentFunction={randRuinType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Aesthetic"} currentFunction={randAesthetic} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Purpose"} currentFunction={randPurpose} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Depth"} currentFunction={randDepth} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Looming Threat"} currentFunction={randLoomingThreat} singleResponseModal={singleResponseModal}/>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Star Ruins & Space Hulks</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Type"} currentFunction={randRuinType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Aesthetic"} currentFunction={randAesthetic} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Purpose"} currentFunction={randPurpose} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Depth"} currentFunction={randDepth} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Looming Threat"} currentFunction={randLoomingThreat} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Type"} currentFunction={randMonsterType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Aspect"} currentFunction={randMonsterAspect} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Bearing"} currentFunction={randMonsterBearing} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Size"} currentFunction={randMonsterSize} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Hazard"} currentFunction={randMonsterHazard} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Treasure"} currentFunction={randTreasure} singleResponseModal={singleResponseModal}/>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Starship Shenanigans</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Type"} currentFunction={randRuinType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Aesthetic"} currentFunction={randAesthetic} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Purpose"} currentFunction={randPurpose} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Depth"} currentFunction={randDepth} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Looming Threat"} currentFunction={randLoomingThreat} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Type"} currentFunction={randMonsterType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Aspect"} currentFunction={randMonsterAspect} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Bearing"} currentFunction={randMonsterBearing} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Size"} currentFunction={randMonsterSize} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Hazard"} currentFunction={randMonsterHazard} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Treasure"} currentFunction={randTreasure} singleResponseModal={singleResponseModal}/>

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