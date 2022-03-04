import { useState } from "react";
import { Button, Container, Modal, Row, Col, Form, FormControl, InputGroup, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./../CreateGame/NewGame.css"


const CreateCharacterModal = (props) => {

    const [charName, setCharName] = useState("");
    const [skill, setSkill] = useState("");
    const [characterSheet, setCharacterSheet] = useState();
    const [baseGame, setBaseGame] = useState();
    const [currentPlayerEmail, setCurrentPlayerEmail] = useState();
    const [addPlayers, setAddPlayers] = useState([]);
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createGame = async () => {
        const gameData = {
          name: charName,
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
                <Col className="p-0 m-0 d-md-inline-flex align-items-center "md={10}>
                    

                    <h4 className="text-start mr-5" >Name</h4>
                    <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Character Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setCharName(e.currentTarget.value)}}
                        value={charName}
                        required
                        />
                    </InputGroup>
                </Col>
             </Row>
            <Row className="justify-content-center">
                <Col md={10} className="justify-content-center d-md-inline-flex align-items-center ">
                

                <h3 className="text-center mr-5" >Skill</h3>
                
                    {/* <h3 className="d-flex align-text-left">Skill</h3> */}
                    <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Skill e.g. Veteran Mechanic"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setSkill(e.currentTarget.value)}}
                        value={skill}
                        required
                        />
                    </InputGroup>
                </Col>
                <small>What profession / job covers your skills?</small>
             </Row>
             <Row className="justify-content-center"><h2 className="text-center">Stats:</h2></Row>
            
            <Row className="justify-content-around">
              <Col className="col-4 col-md-2 m-0 p-0 justify-content-center">
              <p className="text-start mb-1">Moxie</p>
            <Form.Select aria-label="Default select example">
              <option disabled>moxie</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
              </Col>
              <Col className="col-3 col-md-2 m-0 p-0 justify-content-center">
              <p className="text-start mb-1">Smarts</p>
            <Form.Select aria-label="Default select example">
              <option disabled>Smarts</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
              </Col>
              <Col className="col-3 col-md-2 m-0 p-0 justify-content-center">
              <p className="text-start mb-1">Wiggles</p>
            <Form.Select aria-label="Default select example">
              <option disabled>Wiggles</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
              </Col>
              <Col className="col-3 col-md-2 m-0 p-0 justify-content-center">
            <p className="text-start mb-1">Friends</p>
            <Form.Select aria-label="Default select example">
              <option disabled>Friends</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
              </Col>
              <Col className="col-3 col-md-2 m-0 p-0 text-center align-items-center">

            <p className="text-start mb-1">Pockets</p>
            <Form.Select aria-label="Default select example">
              <option disabled>Pockets</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
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

  export default CreateCharacterModal