import { useState } from "react"
import { Accordion, Row } from "react-bootstrap"
import { featureAspect, featureOfInterest, planetType, randAesthetic, randAnotherShip, randBearing, randBeastTrait, randBeastySize, randDemeanour, randDepth, randDifficulty, randEncounter, randExploitableFlaw, randFaction, randFlavour, randGizmoAspect, randGizmoEffect, randGizmoForm, randGizmoPrefix, randGizmoType, randGoal, randHelpfulForte, randHowYouGotIt, randLocation, randLocationAspect, randLoomingThreat, randMechSystems, randMechWeapons, randMegaMonsterType, randMission, randMonsterAbilityType, randMonsterAspect, randMonsterBearing, randMonsterClass, randMonsterElement, randMonsterForm, randMonsterHazard, randMonsterMotivation, randMonsterNature, randMonsterSize, randMonsterType, randMonsterWeakSpot, randMonsterZoneEffect, randNotableQuirk, randObject, randObjective, randOpposition, randOppositionAgenda, randPersonality, randPurpose, randRuinType, randScuffle, randSecret, randShipStatus, randSnag, randSocial, randSpaceWeather, randStrangeEncounter, randTactic, randTreasure, speciesPrefix, speciesSuffix } from "../../GeneratorFunctions"
import AskTheAI from "../../SingleComponents/AskTheAI"
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
      <div style={{height:"100%", overflowY:"scroll", overflowX: "hidden"}}>
      <AskTheAI/>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Mission</Accordion.Header>
    <Accordion.Body>
      <Row className="flex-column">
      {/* <button onClick={e => setMissionModalShow(true)}>new Mission</button> */}
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
      <SciFiButton genName={"How You Got It"} currentFunction={randHowYouGotIt} singleResponseModal={singleResponseModal}/>


    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>Hyperspace Hubris</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Space Weather"} currentFunction={randSpaceWeather} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Another Ship"} currentFunction={randAnotherShip} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Ship Status"} currentFunction={randShipStatus} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Strange Encounters"} currentFunction={randStrangeEncounter} singleResponseModal={singleResponseModal}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>Friends & Frenemies</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Intensity!!!"} currentFunction={randSpaceWeather} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Notable Quirk"} currentFunction={randNotableQuirk} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Helpful Forte"} currentFunction={randHelpfulForte} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Demeanour"} currentFunction={randDemeanour} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Exploitable Flaw"} currentFunction={randExploitableFlaw} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Goal"} currentFunction={randGoal} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Object"} currentFunction={randObject} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Secret"} currentFunction={randSecret} singleResponseModal={singleResponseModal}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="7">
    <Accordion.Header>Gizmos & Gadgets</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Type"} currentFunction={randGizmoType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Durability"} currentFunction={randNotableQuirk} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Prefix"} currentFunction={randGizmoPrefix} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Form"} currentFunction={randGizmoForm} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Effect"} currentFunction={randGizmoEffect} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Aspect"} currentFunction={randGizmoAspect} singleResponseModal={singleResponseModal}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="9">
    <Accordion.Header>Mighty Mechs</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Weapons"} currentFunction={randMechWeapons} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Systems"} currentFunction={randMechSystems} singleResponseModal={singleResponseModal}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="10">
    <Accordion.Header>Massive Monsters</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Monster Class"} currentFunction={randMonsterClass} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Type"} currentFunction={randMegaMonsterType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Form"} currentFunction={randMonsterForm} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Ability Element"} currentFunction={randMonsterElement} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Ability Type"} currentFunction={randMonsterAbilityType} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Monster Nature"} currentFunction={randMonsterNature} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Weak Spot"} currentFunction={randMonsterWeakSpot} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Motivation"} currentFunction={randMonsterMotivation} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Incursion Zone Effect"} currentFunction={randMonsterZoneEffect} singleResponseModal={singleResponseModal}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="11">
    <Accordion.Header>Besties & Beasties</Accordion.Header>
    <Accordion.Body>
      <button onClick={e => setEpisodeEventModalShow(true)}>Episode Events</button>
      <SciFiButton genName={"Beast Size"} currentFunction={randBeastySize} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Personality"} currentFunction={randPersonality} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Notable Trait"} currentFunction={randBeastTrait} singleResponseModal={singleResponseModal}/>
      <SciFiButton genName={"Special Ability"} currentFunction={randMonsterElement} singleResponseModal={singleResponseModal}/>
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
 </div>
    )
}

export default Generators