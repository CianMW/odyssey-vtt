import "../CreateGame/NewGame.css"
import { randFaction, randMission, randSnag, randObjective,randLocation, randLocationAspect, randOpposition, randOppositionAgenda, completeMissionGenerator } from "../../GeneratorFunctions"


const GeneratorModal = (props) => {


    const switchType = () => {

        
            switch (props.version) {
                case "fullMission":
                    return <Container></Container>
                    break;
            
                default:
                    break;
            }
    }

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
           <h1>{props.name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {switchType()}
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


export default GeneratorModal