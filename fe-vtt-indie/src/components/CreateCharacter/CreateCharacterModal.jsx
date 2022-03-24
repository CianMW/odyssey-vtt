import { useState } from "react";
import { Button, Container, Modal, Row, Col, Form, FormControl, InputGroup, CloseButton, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./../CreateGame/NewGame.css"


const CreateCharacterModal = (props) => {

    const [charName, setCharName] = useState("");
    const [skill, setSkill] = useState("");
    const [style, setStyle] = useState("");
    const [moxie, setMoxie] = useState(-1);
    const [smarts, setSmarts] = useState(-1);
    const [wiggles, setWiggles] = useState(-1);
    const [friends, setFriends] = useState(-1);
    const [pockets, setPockets] = useState(-1);
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createCharacter = async () => {
        const charData = {
          characterName: charName,
          style:style,
          skill:skill,
          moxie:moxie,
          smarts:smarts,
          wiggles:wiggles,
          friends:friends,
          pockets:pockets
        }
  
        try{
          const response = await fetch("http://localhost:3150/character/",{
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
             authorization: state.auth.b64Auth
            },
            body: JSON.stringify(charData),
          } )
          if (response.ok) {
            const data = await response.json()
            console.log("Success!!", data)
            await props.onHide()
             navigate(`/${data._id}`, {replace: true})
          } else {
            console.log("Problem!!!!")
          }
        } catch(error) {
          console.log(error)
        }
      }


      const nameTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Simple tooltip
        </Tooltip>
      );
      

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
           <h1>New Character</h1>
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
                        <Button variant="outline-secondary" id="button-addon2">
                        Roll!
                      </Button>
                    </InputGroup>

                    <OverlayTrigger
                       placement="top"
                       delay={{ show: 250, hide: 400 }}
                       overlay={nameTooltip}
                     >
                       <i class="bi bi-info-circle-fill"></i>
                     </OverlayTrigger>

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
                        <Button variant="outline-secondary" id="button-addon2">
                        Roll!
                      </Button>
                    </InputGroup>
                    <OverlayTrigger
                       placement="top"
                       delay={{ show: 250, hide: 400 }}
                       overlay={nameTooltip}
                     >
                       <i class="bi bi-info-circle-fill"></i>
                     </OverlayTrigger>
                </Col>
             </Row>
            <Row className="justify-content-center">
                <Col md={10} className="justify-content-center d-md-inline-flex align-items-center ">
                

                <h3 className="text-center mr-5" >Style</h3>
                
                    {/* <h3 className="d-flex align-text-left">Skill</h3> */}
                    <InputGroup className="mb-3">
                    <FormControl
                      text
                        placeholder="A few words that describe
                        your character's Fortes, Flaws, etc..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {setStyle(e.currentTarget.value)}}
                        value={style}
                        
                        />
                    </InputGroup>
                </Col>

             </Row>
             <Row className="justify-content-center"><h2 className="text-center">Stats:</h2></Row>
            <button onClick={e => console.log(moxie)}>something</button>
            <Row className="justify-content-around">
              <Col className="col-4 col-md-2 m-0 p-0 justify-content-center">
              <p className="text-start mb-1">Moxie</p>
            <Form.Select onChange={e => setMoxie(e.currentTarget.value)} aria-label="Default select example">
              {/* <option disabled>moxie</option> */}
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
              </Col>
              <Col className="col-3 col-md-2 m-0 p-0 justify-content-center">
              <p className="text-start mb-1">Smarts</p>
            <Form.Select onChange={e => setSmarts(e.currentTarget.value)} aria-label="Default select example">
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
            <Form.Select onChange={e => setWiggles(e.currentTarget.value)} aria-label="Default select example">
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
            <Form.Select onChange={e => setFriends(e.currentTarget.value)} aria-label="Default select example">
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
            <Form.Select onChange={e => setPockets(e.currentTarget.value)} aria-label="Default select example">
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
          <button onClick={e => createCharacter()} className="button-right text-center " >Create</button>

                </Row>
            </Container>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CreateCharacterModal