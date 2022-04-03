import React, { useEffect, useState } from "react";
import { Card, Col, Container, FormControl, Row } from "react-bootstrap";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { setDiceRoll } from "../../Actions";
import "./createCharacter.css"

const CharacterSheet = () => {
  const [randomAvatar, setRandomAvatar] = useState("");
  const reference = React.createRef();
  const dispatch = useDispatch();
  useEffect(() => {
    let randomNum =  Math.floor(Math.random() * 10000);

    let avatarLink = "https://robohash.org/" + randomNum +".png";
    setRandomAvatar(avatarLink);
  
  }, []);

  return (
    <Draggable ref={reference}>
      <div className="code-container">
        <div className="glow-container">
          <div className="augs" data-augmented-ui></div>
        </div>

        <section className="augs bg" data-augmented-ui>
          <button className="dots" title="change mode"></button>
          <Container className=" pt-5 main-partition highcontrast-dark">
            <Row className="pt-5">
              <Col md={3}  className="bordered"><img src={randomAvatar} width="200"/></Col>
              <Col md={3} className="">
              <FormControl
              data-augmented-ui="tr-clip bl-clip br-round border"
              placeholder="Marsho Stronghold"
              aria-label="Username"
              aria-describedby="basic-addon1"
              
            />
              </Col>
              <Col md={3} className="bordered"><div>Gumption:</div></Col>
              <Col md={3} className="bordered">Avatar</Col>
            </Row>
            <Row>
              <Col>
              <div className="text-center bordered">
                <h3>Moxie</h3>
              </div>
              </Col>
              <Col>
              <div className="bordered">
                <h3>Smarts</h3>
              </div>
              </Col>
              <Col>
              <div onClick={e => dispatch(setDiceRoll("1d6"))} className="text-center bordered">
                <h3><b>
                  Wiggles
                  </b>
                  </h3>
                  <input style={{width:"50%"}} className="d-flex justify-content-center" type="number" value="3" id="name"></input>
              </div>
              </Col>
              <Col>
              <div className="bordered">
                <h3>Friends</h3>
              </div>
              </Col>
              <Col>
              <div className="bordered">
                <h3>Pockets</h3>
              </div>
              </Col>
              <Col>
              <div className="bordered">
                <h3>Moxie</h3>
              </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Draggable>
  );
};

export default CharacterSheet;
