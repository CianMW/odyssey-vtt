import { Col, Container, Row } from "react-bootstrap";



const Contact = () => {
    return (

        <Container>
            <Row className="d-flex justify-content-center">
                <Col className="d-flex align-items-center inline-block">
                <h1 style={{marginRight: "10px"}} className="pr-3 fw-bold"> Cian Markwick </h1><h2 className="pr-3 text-align-bottom fw-bold">- Full Stack Developer</h2>
                </Col>

            </Row>
            <Row>
            <Col>
            <div data-augmented-ui="
                tl-clip br-clip border
                ">
            <img src="/imgFiles/cianAnim.gif" width="100%"/>
            </div>
            </Col>
            <Col>
            <Row>

            </Row>
            </Col>
            <Col>
            <img src="https://i.ibb.co/0fZFP5d/qr-code.png" width="400px" alt="qr-code" border="0"></img>
            </Col>
            </Row>
            <Row>
            <Col>
            <Row className="justify-content-center">
                <h1 className="text-center">Tech Used</h1>
            </Row>
            <Row>
                <h1>Tech Used</h1>
            </Row>
            </Col>
            </Row>
        </Container>
    )

}

export default Contact;