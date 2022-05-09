import "../CreateGame/NewGame.css"
import { completeMissionGenerator } from "../../GeneratorFunctions"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";


const FullMissionModal = (props) => {
const [mission, setMission] = useState(false);


useEffect(() => {
let newMission = completeMissionGenerator()
setMission(completeMissionGenerator())
}, [])

    return (
      <Modal id="newGameModalContainer"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header id="newGameModalHeader" closeButton closeVariant="white">
          <Modal.Title id="contained-modal-title-vcenter">
           <h1>Mission Generator</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                {mission && 
                    <Row>
                    <Col className="col-12 d-flex">
                    <p><b>Faction: </b> {mission.faction}</p>
                    </Col>
                    <Col className="col-12 d-flex">
                    <p><b>Location: </b> {mission.location}</p>
                    </Col>
                    <Col className="col-12 d-flex">
                    <p><b>Location Aspect: </b> {mission.locationAspect}</p>
                    </Col>
                    <Col className="col-12 d-flex">
                        <p><b>Mission: </b> {mission.mission}</p>
                    </Col>
                    <Col className="col-12 d-flex">
                    <p><b>Objective: </b>{mission.objective}</p>
                    </Col>
                    <Col className="col-12 d-flex">
                    <p><b>Opposition Agenda: </b>{mission.oppositionAgenda}</p>
                    </Col>
                    <Col className="col-12 d-flex">
                    <p><b>The Snag: </b>{mission.theSnag}</p>
                    </Col>
                    </Row>

                    }
                <Row className="d-flex justify-content-center">
                    <button onClick={e => setMission(completeMissionGenerator())}>Check the Galactic papers</button>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Container >
                <Row className="justify-content-center">


          {/* <Button onClick={props.onHide}>Close</Button> */}
          <button onClick={props.onHide} className="button-left text-center ">Close</button>
          {/* <button onClick={e => createGame()} className="button-right text-center " >Close</button> */}

                </Row>
            </Container>
        </Modal.Footer>
      </Modal>

    )
}


export default FullMissionModal