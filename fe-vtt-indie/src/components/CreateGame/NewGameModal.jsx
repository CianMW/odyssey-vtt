import { useState } from "react";
import { Button, Container, Modal, Row, Col, Form, FormControl, InputGroup, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./NewGame.css"
const MyVerticallyCenteredModal = (props) => {

    const [gameName, setGameName] = useState();
    const [characterSheet, setCharacterSheet] = useState();
    const [baseGame, setBaseGame] = useState();
    const [currentPlayerEmail, setCurrentPlayerEmail] = useState();
    const [addPlayers, setAddPlayers] = useState([]);
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createGame = async () => {
        const gameData = {
          name: gameName,
          players:addPlayers
        }
  
        try{
          const response = await fetch("http://localhost:3150/game/",{
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
             authorization: state.auth.b64Auth
            },
            body: JSON.stringify(gameData),
          } )
          if (response.ok) {
            const data = await response.json()
            console.log("Success!!", data)
             navigate(`/${data._id}`, {replace: true})
          } else {
            console.log("Problem!!!!")
          }
        } catch(error) {
          console.log(error)
        }
      }


      const addNewPlayerToList = () => {
        setAddPlayers([...addPlayers, currentPlayerEmail]);
          setCurrentPlayerEmail("")
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
           <h1>New Game</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row className="justify-content-center">

                    {/* game information START */}


                <Col sm={12} md={12}>
          <Form className="justify-content-center d-flex">
          <Col >

              <Row className="justify-content-center">
          <Col md={6}>

                    <h3 className="d-flex align-text-left">Name</h3>
                    <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Game Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setGameName(e.currentTarget.value)}}
                        value={gameName}
                        required
                        />
                    </InputGroup>
                    </Col>
             </Row>
             <Row className="mb-4">
                 <Col className="col-12 col-md-6">
              <h3 className="d-flex align-text-left">Add Players</h3>

                     <InputGroup className="mb-3">
                         <FormControl
                           placeholder="Players Email"
                           aria-label="Players Email"
                           aria-describedby="basic-addon2"
                           onChange={(e) => {setCurrentPlayerEmail(e.currentTarget.value)}}
                           value={currentPlayerEmail}
                           />
                         <Button onClick={e => { addNewPlayerToList()}} variant="outline-secondary" id="button-addon2">
                           Add Player
                         </Button>
                    </InputGroup>
                </Col>
                <Col className="col-12 col-md-6">
                    <h4>Players will be invited</h4>

                    <div className="playersToInvite">
                        {addPlayers.length > 0 ? (
                            addPlayers.map(player =>
                             <Row className="p-0 m-0">
                                 <Col className="col-10 p-0 m-0"><p>{player}</p></Col>
                                 <Col className="col-2 p-0 m-0"><CloseButton variant="white" onClick={e => setAddPlayers(addPlayers.filter(email => email !== player))}/></Col>
                            </Row>)
                        ) : (<h5 className="text-muted">Add a friend or go solo!</h5>)}

                    </div>
                </Col>




            </Row>
         
            </Col>

        </Form>

            </Col>
                    {/* game information END */}

                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Container >
                <Row className="justify-content-between">


          {/* <Button onClick={props.onHide}>Close</Button> */}
          <button onClick={props.onHide} className="button-left text-center ">Close</button>
          <button onClick={e => createGame()} className="button-right text-center " >Create</button>

                </Row>
            </Container>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal