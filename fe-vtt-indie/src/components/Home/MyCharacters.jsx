import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CButton } from "../../SingleComponents/CButton";
import CreateCharacterModal from "../CreateCharacter/CreateCharacterModal";
import { useState } from "react";
import CyberButton from "../../SingleComponents/CyberButton";

const MyCharacters = ({ updateUser}) => {
  const [modalShow, setModalShow] = useState(false)
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();


  const characterNameSlicer = (charName) => {


    if ( window.innerWidth < 450) {     
      return charName.slice(0,6) + "..."
      }
      else {
        if (charName.length > 12) {
          return charName.slice(0, 10) + "..."
        } else {
          return charName
        }
      }
  }

  return (
    <>
    <CreateCharacterModal 
     updateUser={updateUser}
    show={modalShow}
    onHide={() => setModalShow(false)}
    />
        <Container className=" py-2 ">
          <Row className="p-0 m-0">
            {currentState.user.info.characters.length > 0 ? (
              currentState.user.info.characters
                .filter((char, idx) => idx <= 3)
                .map((char, idx) => (
                  <Col
                    key={Math.random() + "/" + idx}
                  
                    className="col-12 p-0 m-0"
                  >
                    <Row className="align-items-center justify-content-center mb-2">
                      <Col className="col-6 col-md-4 col-lg-3">
                        <h5><u>
                          {characterNameSlicer(char.characterName)}
                          </u>
                          </h5>
                      </Col>
                      <Col className="col-4 col-md-3 col-lg-3">
                        <h6>moxie:{char.moxie}</h6>
                      </Col>
                      <Col className="col-4 col-md-3 col-lg-3">
                        <h6>smarts:{char.smarts}</h6>
                      </Col>
                      <Col className="col-4 col-md-3 col-lg-3">
                        <h6>pockets:{char.pockets}</h6>
                      </Col>
                      <Col className="col-4 col-md-3 col-lg-3">
                        <h6>wiggles:{char.wiggles}</h6>
                      </Col>
                      <Col className="col-4 col-md-3 col-lg-3">
                        <h6>friends:{char.friends}</h6>
                      </Col>
                      <Col className="col-6 col-md-4 col-lg-3">
                        <CButton label="Open Character" type="primary" link={"/character" + char._id} /> 
                      </Col>

                    </Row>



                  </Col>
                ))
            ) : (
              <h5>Click here to create a character</h5>
            )}
          </Row>
          <Row className="justify-content-center text-center">
          <CyberButton callback={e => setModalShow(true)} text="+ New Character"/>
          </Row>
        </Container>
    </>
  );
};

export default MyCharacters;
