import React, { useEffect, useState } from "react";
import { Card, Col, Container, FormControl, Row } from "react-bootstrap";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from 'react-resizable';
import { useDispatch } from "react-redux";
import { setDiceRoll } from "../../Actions";
import { Rnd} from "react-rnd";
import "./createCharacter.css"

const CharacterSheet = () => {
  const [randomAvatar, setRandomAvatar] = useState("");
  const [tempNumber, setTempNumber] = useState(0);
  const reference = React.createRef();
  const dispatch = useDispatch();
  useEffect(() => {
    let randomNum =  Math.floor(Math.random() * 10000);

    let avatarLink = "https://robohash.org/" + randomNum +".png";
    setRandomAvatar(avatarLink);
  
  }, []);


const [measurementState, setMeasurementState] = useState({width: 200, height: 200});

  // On top layout
  const onResize = (event, {element, size, handle}) => {
    setMeasurementState({width: size.width, height: size.height});
  };

  return (
    <Rnd
  default={{
    x: 0,
    y: 0,
    width: 320,
    height: 200,
  }}
  minWidth={500}
  minHeight={190}
  maxWidth={"1000"}
  maxHeight={"1000"}
>

    <div className="code-container">
        <div className="glow-container">
          <div className="augs" data-augmented-ui></div>
        </div>

        <section className="augs bg" data-augmented-ui>
          <button className="dots" title="change mode"></button>
          <Container className=" pt-5 main-partition highcontrast-dark">
            <Row className="pt-5 mb-3">
              <Col md={3}  className="bordered"><img src={randomAvatar} width="200"/></Col>
              <Col md={3} className="">
              <FormControl
              data-augmented-ui="tr-clip bl-clip br-round border"
              placeholder="Marsho Stronghold"
              aria-label="Username"
              aria-describedby="basic-addon1"
              
              />
              </Col>
              <Col md={3} className="bordered charSheetContainer">
              <Row className="justify-content-center">
                  <h5 className="fw-bold text-center">
                    Gumption
                  </h5>
                  </Row>
                  <Row className="d-flex p-0 justify-content-center">
                  <div className="d-flex justify-content-around">
                    
                <label for="current">Current</label>
                <label for="max">Max</label>
                  </div>
                <div className="double-input d-flex justify-content-center">
                  <input className="text-center"  type="number" id="current" placeholder="current Gumption" style={{maxWidth:"100px"}}/>
                  <input className="text-center" type="number" id="max"  placeholder="Last" style={{maxWidth:"100px"}}/>
                </div>
                <Row className="mt-5 justify-content-center">
                  <h5 className="fw-bold text-center">
                    Grit
                  </h5>
                  </Row>
                  <Row className="m-0 p-0 justify-content-center">
                    <Col >
                  <div class="squaredGrit">
                      <input type="checkbox" value="None" id="squaredGrit" name="check" />
                      <label for="squaredGrit"></label>
                    </div>
                    </Col>
                    <Col>
                  <div class="squaredGrit">
                      <input type="checkbox" value="None" id="squaredGrit" name="check" />
                      <label for="squaredGrit"></label>
                    </div>
                    </Col>
                    <Col>
                  <div class="squaredGrit">
                      <input type="checkbox" value="None" id="squaredGrit" name="check" />
                      <label for="squaredGrit"></label>
                    </div>
                    </Col>
                    <Col>
                  <div class="squaredGrit">
                      <input type="checkbox" value="None" id="squaredGrit" name="check" />
                      <label for="squaredGrit"></label>
                    </div>
                    </Col>
                    <Col>
                  <div class="squaredGrit">
                      <input type="checkbox" value="None" id="squaredGrit" name="check" />
                      <label for="squaredGrit"></label>
                    </div>
                    </Col>
                  </Row>
                  </Row>
                  </Col>
              <Col md={3} className="bordered m-0 p-0">
                <Row className="justify-content-center">
                  <h5 className="fw-bold text-center">
                  Ailments
                  </h5>
                  </Row>
                  <Row className="mt-4 p-0 m-0 d-inline-flex justify-content-around" style={{width:"100%"}}>
                    <Col md={6} className="mx-auto ">
                  <label className="d-inline-flex">
                    <div class="squaredThree">
                      <input type="checkbox" value="None" id="squaredThree" name="check" />
                      <label for="squaredThree"></label>
                    </div>
                      <span>Shaken</span>
                      </label>
                    </Col>
                    <Col md={6} className="mx-auto">
                  <label className="d-inline-flex">
                    <div class="squaredThree">
                      <input type="checkbox" value="None" id="squaredThree" name="check" />
                      <label for="squaredThree"></label>
                    </div>
                      <span>Confused</span>
                      </label>
                    </Col>
                  </Row>
                  <Row className="mt-4 p-0 m-0 d-inline-flex" style={{width:"100%"}}>
                    <Col md={6} className="mx-auto ">
                  <label className="d-inline-flex">
                    <div class="squaredThree">
                      <input type="checkbox" value="None" id="squaredThree" name="check" />
                      <label for="squaredThree"></label>
                    </div>
                      <span>Stressed</span>
                      </label>
                    </Col>
                    <Col md={6} className="mx-auto ">
                  <label className="d-inline-flex">
                    <div class="squaredThree">
                      <input type="checkbox" value="None" id="squaredThree" name="check" />
                      <label for="squaredThree"></label>
                    </div>
                      <span>Frightened</span>
                      </label>
                    </Col>
                  </Row>
                  <Row className="mt-4 p-0 mx-0 d-inline-flex" style={{width:"100%"}}>
                    <Col  md={6} className="mx-auto">
                  <label className="d-inline-flex">
                    <div class="squaredThree">
                      <input type="checkbox" value="None" id="squaredThree" name="check" />
                      <label for="squaredThree"></label>
                    </div>
                      <span>Frustrated</span>
                      </label>
                    </Col>
                    <Col md={6} className="mx-auto">
                  <label className="d-inline-flex ">
                    <div class="squaredThree">
                      <input type="checkbox" value="None" id="squaredThree" name="check" />
                      <label for="squaredThree"></label>
                    </div>
                      <span>Exhausted</span>
                      </label>
                    </Col>
                  </Row>
                </Col>
            </Row>
            <Row>
              <Col>
              <div className=" text-center bordered">
                <h3 className="fw-bold" onClick={e => dispatch(setDiceRoll("1d6"))}>Moxie</h3>
                <FormControl
                className="text-center fw-bold"
                placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={tempNumber}
                    onChange={e => setTempNumber(e.target.value)}
                    />
              </div>
              </Col>
              <Col>
              <div className=" text-center bordered">
                <h3 className="fw-bold" onClick={e => dispatch(setDiceRoll("1d6"))}>Smarts</h3>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={tempNumber}
                    onChange={e => setTempNumber(e.target.value)}
                    />
              </div>
              </Col>
              <Col>
              <div className=" text-center bordered">
                <h3 className="fw-bold" onClick={e => dispatch(setDiceRoll("1d6"))}>
                  Wiggles
                  </h3>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={tempNumber}
                    onChange={e => setTempNumber(e.target.value)}
                    />
              </div>
              </Col>
              <Col>
              <div className=" text-center bordered">
                <h3 className="fw-bold" onClick={e => dispatch(setDiceRoll("1d6"))}>Friends</h3>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={tempNumber}
                    onChange={e => setTempNumber(e.target.value)}
                    />
              </div>
              </Col>
              <Col>
              <div className="text-center bordered">
                <h3 className="fw-bold" onClick={e => dispatch(setDiceRoll("1d6"))}>Pockets</h3>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={tempNumber}
                    onChange={e => setTempNumber(e.target.value)}
                    />
              </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Rnd>
  );
};

export default CharacterSheet;
