import { Col, Container, Row } from "react-bootstrap";
import "./Attributes.css";

const Attributes = ({ onChange, attributes, onRoll }) => {


  // update attribute from numerical input
  const updateAttribute = (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val) {
      val = parseInt(val);
    }
    const attr = e.target.id.replace("attrib-", "");

    const newState = { ...attributes };
    newState[attr].total = val;
    onChange(newState);
  };

  // roll dice on button click
  const rollDice = (e) => {
    return e
  }

  const rollD4 = async (e) => {
    e.preventDefault();
    console.log(e)
    // const attr = e.currentTarget.id.replace("roll-", "");
   await onRoll("1d4");
  };
  const rollD6 = (e) => {
    e.preventDefault();
    const attr = e.currentTarget.id.replace("roll-", "");
    onRoll("1d6", attr);
  };
  const rollD8 = (e) => {
    e.preventDefault();
    const attr = e.currentTarget;
    onRoll("1d8", attr);
  };
  const rollD10 = (e) => {
    e.preventDefault();
    const attr = e.currentTarget;
    onRoll("1d10", attr);
  };
  const rollD12 = (e) => {
    e.preventDefault();
    const attr = e.currentTarget.id.replace("roll-", "");
    onRoll("1d12", attr);
  };
  const rollD20 = (e) => {
    e.preventDefault();
    const attr = e.currentTarget.id.replace("roll-", "");
    onRoll("1d20", attr);
  };

  return (
    <Container>
    <Row className=" d-flex justify-content-around">
      <Col md={3}></Col>
      <Col md={1}>
      <button data-augmented-ui="tr-clip bl-clip br-round both" className="d4-btn die-btn" onClick={e => rollD4(e)}><img src="/imgFiles/d4.svg" width="64px"/></button>
      </Col>
      <Col md={1}>
      <button data-augmented-ui="tr-clip bl-clip br-round both" className="d6-btn die-btn" onClick={e => rollD6(e)}><img src="/imgFiles/d6.svg" width="64px"/></button>
      </Col>
      <Col md={1}>
      <button data-augmented-ui="tr-clip bl-clip br-round both" className="d8-btn die-btn" onClick={e => rollD8(e)}><img src="/imgFiles/d8.svg" width="64px"/></button>
      </Col>
      <Col md={1}>
      <button data-augmented-ui="tr-clip bl-clip br-round both" className="d10-btn die-btn" onClick={e => rollD10(e)}><img src="/imgFiles/d10.svg" width="64px"/></button>
      </Col>
      <Col md={1}>
      <button data-augmented-ui="tr-clip bl-clip br-round both" className="d12-btn die-btn" onClick={e => rollD12(e)}><img src="/imgFiles/d12.svg" width="64px"/></button>
      </Col>
      <Col md={1}>
      <button data-augmented-ui="tr-clip bl-clip br-round both" className="d20-btn die-btn" onClick={e => rollD20(e)}><img src="/imgFiles/d20.svg" width="64px"/></button>
      </Col>
      <Col md={3}></Col>

    </Row>
    </Container>
  );
};

export default Attributes;
