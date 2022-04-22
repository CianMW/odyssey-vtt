import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";
import { useDispatch, useSelector } from "react-redux";
import { setCharacterClosed, setDiceRoll, updateSystem } from "../../Actions";
import { Rnd } from "react-rnd";
import "./createCharacter.css";

const CharacterSheet = ({ character, updateUser }) => {
  const [randomAvatar, setRandomAvatar] = useState("");
  const [tempNumber, setTempNumber] = useState(0);
  const reference = React.createRef();
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [characterSheet, setCharacterSheet] = useState(character);

  const [shaken, setShaken] = useState(character.ailments.shaken);
  const [stressed, setStressed] = useState(character.ailments.stressed);
  const [frustrated, setFrustrated] = useState(character.ailments.frustrated);
  const [confused, setConfused] = useState(character.ailments.confused);
  const [frightened, setFrightened] = useState(character.ailments.frightened);
  const [exhausted, setExhausted] = useState(character.ailments.exhausted);
  const [characterName, setCharacterName] = useState(character.characterName);
  const [friends, setFriends] = useState(character.friends);
  const [moxie, setMoxie] = useState(character.moxie);
  const [currentGumption, setCurrentGumption] = useState(
    character.gumption.currentGumption
  );
  const [maxGumption, setMaxGumption] = useState(character.maxGumption);
  const [pockets, setPockets] = useState(character.pockets);
  const [skill, setSkill] = useState(character.skill);
  const [style, setStyle] = useState(character.style);
  const [smarts, setSmarts] = useState(character.smarts);
  const [wiggles, setWiggles] = useState(character.wiggles);
  const [firstGrit, setFirstGrit] = useState(character.grit.firstGrit);
  const [secondGrit, setSecondGrit] = useState(character.grit.secondGrit);
  const [thirdGrit, setThirdGrit] = useState(character.grit.thirdGrit);
  const [fourthGrit, setFourthGrit] = useState(character.grit.fourthGrit);
  const [fifthGrit, setFifthGrit] = useState(character.grit.fifthGrit);

  const payload = {
    ailments: {
      shaken: shaken,
      stressed: stressed,
      frustrated: frustrated,
      confused: confused,
      frightened: frightened,
      exhausted: exhausted,
    },
    characterName: characterName,
    friends: friends,
    grit: {
      firstGrit: firstGrit,
      secondGrit: secondGrit,
      thirdGrit: thirdGrit,
      fourthGrit: fourthGrit,
      fifthGrit: fifthGrit,
    },
    gumption: { maxGumption: maxGumption, currentGumption: currentGumption },
    moxie: moxie,
    pockets: pockets,
    skill: skill,
    smarts: smarts,
    style: style,
    wiggles: wiggles,
  };

  const updateCharacter = async () => {
    try {
      const response = await fetch(
        `http://localhost:3150/character/${character._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: currentState.auth.b64Auth,
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("updated the character", data);
         await updateUser()
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateAndClose = async () => {
    updateCharacter();
    await dispatch(setCharacterClosed(character._id));
  };

  console.log("FUCK", character);
  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 10000);

    let avatarLink = "https://robohash.org/" + randomNum + ".png";
    setRandomAvatar(avatarLink);
  }, []);

  const [measurementState, setMeasurementState] = useState({
    width: 200,
    height: 200,
  });

  // On top layout
  const onResize = (event, { element, size, handle }) => {
    setMeasurementState({ width: size.width, height: size.height });
  };

  const handleChange = (named) => {
    switch (named) {
      case "firstGrit":
        setFirstGrit(!firstGrit);
        break;
      case "secondGrit":
        setSecondGrit(!secondGrit);
        break;
      case "thirdGrit":
        setThirdGrit(!thirdGrit);
        break;
      case "fourthGrit":
        setFourthGrit(!fourthGrit);
        break;
      case "fifthGrit":
        setFifthGrit(!fifthGrit);
        break;
      default:
        break;
    }
  };

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 1000,
        height: 400,
      }}
      minWidth={500}
      minHeight={190}
      maxWidth={"1000"}
      maxHeight={"400"}
      bounds="window"
    >
      <div className="code-container">
        <div className="glow-container">
          <div className="augs" data-augmented-ui></div>
        </div>

        <section className="augs bg" data-augmented-ui>
          <button
            onClick={(e) => updateAndClose()}
            className="dots"
            title="change mode"
          ></button>
          <Container className=" pt-5 main-partition highcontrast-dark">
            <Row className="pt-3">
              <Col md={3} className="p-0 m-0">
                <div
                  style={{
                    fontSize: "20px",
                    paddingY: "10px",
                    marginLeft: "10px",
                  }}
                  data-augmented-ui="tr-clip bl-clip br-round border"
                >
                  <FormControl
                    className="text-center fw-bold"
                    placeholder="Marsho Stronghold"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <Row className=" mb-3">
              <Col
                md={3}
                data-augmented-ui="
              tl-scoop-x tr-scoop-x br-scoop-x bl-scoop-x both
            "
                className="bordered"
              >
                <img src={character.avatar} width="200" />
              </Col>
              <Col md={3} className="">
                <h5 className="text-center fw-bold">Skill</h5>
                <div
                  style={{
                    fontSize: "20px",
                    paddingY: "10px",
                    marginLeft: "10px",
                  }}
                  data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
                >
                  <FormControl
                    type="textarea"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                </div>
                <h5 className="text-center fw-bold">Style</h5>
                <div
                  style={{
                    fontSize: "20px",
                    paddingY: "10px",
                    marginLeft: "10px",
                  }}
                  data-augmented-ui=" tl-clip tr-clip br-clip bl-clip both"
                >
                  <FormControl
                    type="textarea"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                  />
                </div>
              </Col>
              <Col
                md={3}
                data-augmented-ui="tr-clip br-clip l-clip border"
                className="bordered charSheetContainer"
              >
                <Row className="justify-content-center">
                  <h5 className="fw-bold text-center">Gumption</h5>
                </Row>
                <Row className="d-flex p-0 justify-content-center">
                  <div className="d-flex justify-content-around">
                    <label for="current">Current</label>
                    <label for="max">Max</label>
                  </div>
                  <div className="double-input d-flex justify-content-center">
                    <input
                      className="text-center"
                      value={currentGumption}
                      onChange={(e) =>
                        setCurrentGumption(e.currentTarget.value)
                      }
                      type="number"
                      id="current"
                      placeholder="current Gumption"
                      style={{ maxWidth: "100px" }}
                    />
                    <input
                      className="text-center"
                      value={currentGumption}
                      onChange={(e) =>
                        setCurrentGumption(e.currentTarget.value)
                      }
                      type="number"
                      id="max"
                      placeholder="Last"
                      style={{ maxWidth: "100px" }}
                    />
                  </div>
                  <Row className="mt-5 justify-content-center">
                    <h5 className="fw-bold text-center">Grit</h5>
                  </Row>
                  <Row className="m-0 p-0 justify-content-center">
                    <Col>
                      <div className="gritBox">
                        <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setFirstGrit(!firstGrit)}
                          checked={firstGrit}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="gritBox">
                      <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setSecondGrit(!secondGrit)}
                          checked={secondGrit}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="squaredGrit">
                      <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setThirdGrit(!thirdGrit)}
                          checked={thirdGrit}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="squaredGrit">
                      <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setFourthGrit(!fourthGrit)}
                          checked={fourthGrit}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="squaredGrit">
                      <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setFifthGrit(!fifthGrit)}
                          checked={fifthGrit}
                        />
                      </div>
                    </Col>
                  </Row>
                </Row>
              </Col>
              <Col
                md={3}
                data-augmented-ui="  tl-clip bl-clip r-clip border"
                className=" m-0 p-0"
              >
                <Row className="justify-content-center">
                  <h5 className="fw-bold text-center">Ailments</h5>
                </Row>
                <Row
                  className="mt-4 p-0 m-0 d-inline-flex justify-content-around"
                  style={{ width: "100%" }}
                >
                  <Col md={6} className="mx-auto ">
                    <label className="d-inline-flex">
                      <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setShaken(!shaken)}
                          checked={shaken}
                        />
                      <span>Shaken</span>
                    </label>
                  </Col>
                  <Col md={6} className="mx-auto">
                    <label className="d-inline-flex">
                    <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setConfused(!confused)}
                          checked={confused}
                        />
                      <span>Confused</span>
                    </label>
                  </Col>
                </Row>
                <Row
                  className="mt-4 p-0 m-0 d-inline-flex"
                  style={{ width: "100%" }}
                >
                  <Col md={6} className="mx-auto ">
                    <label className="d-inline-flex">
                    <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setStressed(!stressed)}
                          checked={stressed}
                        />
                      <span>Stressed</span>
                    </label>
                  </Col>
                  <Col md={6} className="mx-auto ">
                    <label className="d-inline-flex">
                    <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setFrightened(!frightened)}
                          checked={frightened}
                        />
                      <span>Frightened</span>
                    </label>
                  </Col>
                </Row>
                <Row
                  className="mt-4 p-0 mx-0 d-inline-flex"
                  style={{ width: "100%" }}
                >
                  <Col md={6} className="mx-auto">
                    <label className="d-inline-flex">
                    <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setFrustrated(!frustrated)}
                          checked={frustrated}
                        />
                      <span>Frustrated</span>
                    </label>
                  </Col>
                  <Col md={6} className="mx-auto">
                    <label className="d-inline-flex ">
                    <Form.Check
                          type={"checkbox"}
                          id={`clickness`}
                          onChange={e => setExhausted(!exhausted)}
                          checked={exhausted}
                        />
                      <span>Exhausted</span>
                    </label>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className=" text-center bordered">
                  <h3
                    className="fw-bold clickable-stat"
                    onClick={(e) => dispatch(setDiceRoll("1d6"))}
                  >
                    Moxie
                  </h3>
                  <FormControl
                    className="text-center fw-bold"
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={moxie}
                    onChange={(e) => setMoxie(e.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <div className=" text-center bordered">
                  <h3
                    className="fw-bold clickable-stat"
                    onClick={(e) => dispatch(setDiceRoll("1d6"))}
                  >
                    Smarts
                  </h3>
                  <FormControl
                    className="text-center fw-bold"
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={smarts}
                    onChange={(e) => setSmarts(e.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <div className=" text-center bordered">
                  <h3
                    className="fw-bold clickable-stat"
                    onClick={(e) => dispatch(setDiceRoll("1d6"))}
                  >
                    Wiggles
                  </h3>
                  <FormControl
                    className="text-center fw-bold"
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={wiggles}
                    onChange={(e) => setWiggles(e.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <div className=" text-center bordered">
                  <h3
                    className="fw-bold clickable-stat"
                    onClick={(e) => dispatch(setDiceRoll("1d6"))}
                  >
                    Friends
                  </h3>
                  <FormControl
                    className="text-center fw-bold"
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={friends}
                    onChange={(e) => setFriends(e.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <div className="text-center bordered">
                  <h3
                    className="fw-bold clickable-stat"
                    onClick={(e) => dispatch(setDiceRoll("1d6"))}
                  >
                    Pockets
                  </h3>
                  <FormControl
                    className="text-center fw-bold"
                    placeholder="Username"
                    aria-label="Username"
                    type="number"
                    aria-describedby="basic-addon1"
                    value={pockets}
                    onChange={(e) => setPockets(e.target.value)}
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
