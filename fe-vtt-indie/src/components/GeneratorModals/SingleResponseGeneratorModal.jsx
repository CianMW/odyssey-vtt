import "../CreateGame/NewGame.css"
import { randFaction, randMission, randSnag, randObjective,randLocation, randLocationAspect, randOpposition, randOppositionAgenda, completeMissionGenerator, randScuffle, randTactic, randBearing, randSocial, randEncounter, randDifficulty, randFlavour, planetType, planetaryPickle, speciesPrefix, speciesSuffix, featureAspect, featureOfInterest, randRuinType, randAesthetic, randPurpose, randDepth, randLoomingThreat, randMonsterType, randMonsterAspect, randMonsterBearing, randMonsterSize, randMonsterHazard, randHowYouGotIt, randSpaceWeather, randAnotherShip, randShipStatus, randStrangeEncounter, randNotableQuirk, randHelpfulForte, randExploitableFlaw, randGoal, randObject, randSecret, randDemeanour, randGizmoType, randGizmoForm, randGizmoEffect, randGizmoAspect, randGizmoPrefix, randGizmoDurability, randMechWeapons, randMechSystems, randMonsterClass, randMegaMonsterType, randMonsterForm, randMonsterElement, randMonsterAbilityType, randMonsterNature, randMonsterWeakSpot, randMonsterMotivation, randMonsterZoneEffect, randBeastySize, randPersonality, randBeastTrait, randBeastSpecialAbility, randEarlyLife, randFirstSteps, randHowDidItGo, randOmnipotentEntity, randPlayerProfessions } from "../../GeneratorFunctions"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import ParticleEffectButton from "react-particle-effect-button";

const SingleResponseGeneratorModal = (props) => {
const [mission, setMission] = useState(false);
const [genName, setGenName] = useState("Generator");
const [particleButton, setParticleButton] = useState(true);


useEffect(() => {
    const particleSetter = () => {setParticleButton(!particleButton)
    }
    setTimeout(particleSetter, 1500)
}, [])

useEffect(() => {
    

        switch (props.funcName) {
            case "randFaction":
                setGenName("Faction")
                break;
            case "randMission":
                setGenName("Mission")
                break;
            case "randObjective":
                setGenName("Objective")
                break;
            case "randLocation":
                setGenName("Location")
                break;
            case "randLocationAspect":
                setGenName("Location Aspect")
                break;

            case "randOpposition":
                setGenName("Opposition")
                break;

            case "randOppositionAgenda":
                setGenName("Opposition Agenda")
                break;

            case "randSnag":
                setGenName("The Snag")
                break;

            case "randScuffle":
                setGenName("A Scuffle")
                break;

            case "randTactic":
                setGenName("The Tactic")
                break;

            case "randSocial":
                setGenName("Social Standing")
                break;

            case "randBearing":
                setGenName("The Bearing")
                break;

            case "randEncounter":
                setGenName("The Encounter")
                break;
        

            case "randDifficulty":
                setGenName("The Difficulty")
                break;

            case "randFlavour":
                setGenName("Flavour")
                break;

            case "planetType":
                setGenName("Planet Type")
                break;

            case "speciesPrefix":
                setGenName("Species Prefix")
                break;

            case "speciesSuffix":
                setGenName("Species Prefix")
                break;

            case "featureAspect":
                setGenName("Feature Aspect")
                break;
        
            case "featureOfInterest":
                setGenName("Feature of Inerest")
                break;
                
            case "featureOfInterest":
                setGenName("Feature of Inerest")
                break;

            case "randRuinType":
                setGenName("Ruin Type")
                break;

            case "randAesthetic":
                setGenName("Aesthetic")
                break;

            case "randPurpose":
                setGenName("Purpose")
                break;

            case "randDepth":
                setGenName("Depth")
                break;
        
            case "randLoomingThreat":
                setGenName("Looming Threat")
                break;
        
            case "randMonsterType":
                setGenName("Monster Type")
                break;
        
            case "randMonsterAspect":
                setGenName("Monster Aspect")
                break;

            case "randMonsterBearing":
                setGenName("Monster Bearing")
                break;

            case "randMonsterSize":
                setGenName("Monster Size")
                break;

            case "randMonsterHazard":
                setGenName("Monster Hazard")
                break;

            case "randHowYouGotIt":
                setGenName("How You Got It")
                break;

            case "randHowYouGotIt":
                setGenName("How You Got It")
                break;

            case "randSpaceWeather":
                setGenName("Space Weather")
                break;

            case "randAnotherShip":
                setGenName("Another Ship")
                break;

            case "randShipStatus":
                setGenName("Ship Status")
                break;

            case "randStrangeEncounter":
                setGenName("Strange Encounter")
                break;

            case "randNotableQuirk":
                setGenName("Notable Quirk")
                break;

            case "randHelpfulForte":
                setGenName("Helpful Forte")
                break;

            case "randExploitableFlaw":
                setGenName("Exploitable Flaw")
                break;

            case "randGoal":
                setGenName("Goal")
                break;

            case "randObject":
                setGenName("Object Focus")
                break;

            case "randSecret":
                setGenName("Secret")
                break;

            case "randSecret":
                setGenName("Secret")
                break;

            case "randDemeanour":
                setGenName("Demeanour")
                break;

            case "randGizmoType":
                setGenName("Gizmo Type")
                break;

            case "randGizmoForm":
                setGenName("Gizmo Form")
                break;

            case "randGizmoEffect":
                setGenName("Gizmo Effect")
                break;

            case "randGizmoAspect":
                setGenName("Gizmo Aspect")
                break;

            case "randGizmoPrefix":
                setGenName("Gizmo Prefix")
                break;

            case "randGizmoDurability":
                setGenName("Gizmo Durability")
                break;

            case "randMechWeapons":
                setGenName("Mech Weapon")
                break;

            case "randMechSystems":
                setGenName("Mech Systems")
                break;

            case "randMonsterClass":
                setGenName("Monster Class")
                break;

            case "randMegaMonsterType":
                setGenName("Mega Monster Type")
                break;

            case "randMonsterForm":
                setGenName("Mega Monster Form")
                break;

            case "randMonsterElement":
                setGenName("Mega Monster Element")
                break;

            case "randMonsterAbilityType":
                setGenName("Mega Monster Ability Type")
                break;

            case "randMonsterNature":
                setGenName("Mega Monster Nature")
                break;

            case "randMonsterWeakSpot":
                setGenName("Monster Weak Spot")
                break;

            case "randMonsterMotivation":
                setGenName("Monster Motivation")
                break;

            case "randMonsterZoneEffect":
                setGenName("Monster Zone Effect")
                break;

            case "randBeastySize":
                setGenName("Beast Size")
                break;

            case "randPersonality":
                setGenName("Beast Personality")
                break;

            case "randBeastTrait":
                setGenName("Beast Trait")
                break;

            case "randBeastSpecialAbility":
                setGenName("Beast Special Ability")
                break;

            case "randEarlyLife":
                setGenName("Early Life")
                break;

            case "randFirstSteps":
                setGenName("First Steps")
                break;

            case "randHowDidItGo":
                setGenName("How Did It Go?")
                break;

            case "randOmnipotentEntity":
                setGenName("Omnipotent Entity")
                break;
        
            case "randPlayerProfessions":
                setGenName("Player Professions")
                break;
        
            default:
                setGenName("Generator Name")
                break;
    }
}, [props.funcName]);


useEffect(() => {
let newMission = completeMissionGenerator()
setMission(completeMissionGenerator())
}, [])



const updateMission = () => {
    setParticleButton(true)
    setTimeout(changeMission, 2000)
    function changeMission() {
        setMission(completeMissionGenerator())
    }

}

const checkParticleButton = () => {
    if (particleButton) {
        setParticleButton(false)
    }
}



    return (
        
        <Modal onEntered={e => setParticleButton(false)}	
        id="newGameModalContainer"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <div className="d-flex justify-content-center">
        <ParticleEffectButton onComplete={e => checkParticleButton()} duration={450} particlesAmountCoefficient={3} style={"stroke"} type={"rectangle"} direction={"bottom"} color={"white"} hidden={particleButton}>
        <Modal.Header id="newGameModalHeader" closeVariant="white">
          <Modal.Title id="contained-modal-title-vcenter">
           <h1>{genName}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <button onClick={e => console.log(props.funcName)}>check name</button>
                {mission && 
                    <Row>
                    <Col className="col-12 d-flex">
                    <p><b>Result: </b>{mission.theSnag}</p>
                    </Col>
                    </Row>

}
                <Row className="d-flex justify-content-center">
                    <button onClick={e => updateMission()}>Check the Galactic papers</button>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Container >
                <Row className="justify-content-center">


          {/* <Button onClick={props.onHide}>Close</Button> */}
          {/* <button onClick={props.onHide} className="button-left text-center ">Close</button> */}
          {/* <ParticleEffectButton hidden={particleButton}> */}

          <button onClick={props.onHide} className="button-left text-center ">Close</button>
          {/* </ParticleEffectButton> */}
          {/* <button onClick={e => createGame()} className="button-right text-center " >Close</button> */}

                </Row>
            </Container>
        </Modal.Footer>
</ParticleEffectButton>
</div>
      </Modal>

    )
}


export default SingleResponseGeneratorModal