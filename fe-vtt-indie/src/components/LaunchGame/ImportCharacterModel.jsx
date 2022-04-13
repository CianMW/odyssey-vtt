import { useState } from "react";
import { Button, Container, Modal, Row, Col, Form, FormControl, InputGroup, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateSystem } from "../../Actions";
import "../CreateGame/NewGame.css"
const ImportCharacterModal = (props) => {

    const [gameName, setGameName] = useState();
    const [characterSheet, setCharacterSheet] = useState();
    const [baseGame, setBaseGame] = useState();
    const [currentPlayerEmail, setCurrentPlayerEmail] = useState();
    const [addPlayers, setAddPlayers] = useState([]);
    const currentState = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addCharacterToGame = async (characterId) => {
        const gameData = {
          name: gameName,
          players:addPlayers
        }
        console.log("characterId and GameID", props.gameId, characterId)
  
        try{
          const response = await fetch(`http://localhost:3150/game/${props.gameId}/addCharacter/${characterId}`,{
           method: 'PUT',
           headers: {
            'Content-Type': 'application/json',
             authorization: currentState.auth.b64Auth
            },
          } )
          if (response.ok) {
            const data = await response.json()
            console.log("character added successfully!!", data)
            await props.updateUser()
          //  await dispatch(updateSystem)
          } else {
            console.log("Problem!!!!")
          }
        } catch(error) {
          console.log(error)
        }
      }

    const currentGameCharacters = currentState.user.info.games.filter(game => game._id === props.gameId)[0].characters.length > 0 ?  true : false ;
    const loadedCharacters = currentState.user.info.games.filter(game => game._id === props.gameId)[0].characters
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
           <h1>Import a Character</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>


                    {/* Import Character START */}




            {currentState.user.info.characters.length > 0 ? (
              currentState.user.info.characters.map(char => (
                  <Row>
                      <Col className="col-10 mb-3">{char.characterName}</Col>
                      <Col className="col-2"><Button size="sm" disabled={currentGameCharacters ? loadedCharacters.includes(char._id) : false}   onClick={e => addCharacterToGame(char._id)}>+ Add</Button></Col>
                  </Row>
            ))) 
              : 
              (<h3>Looks like you don't have any Characters</h3>)
            }


                    {/* Import Character END */}


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
    );
  }

  export default ImportCharacterModal