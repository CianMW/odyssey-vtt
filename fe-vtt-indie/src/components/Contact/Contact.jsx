import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";



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
            <img src="https://i.ibb.co/0fZFP5d/qr-code.png" width="400px" alt="qr-code" border="0"></img>
            </Col>
            <Col>
            <Row>
            <h1 className="text-center fw-bold">Tech Used</h1>
            </Row>
            <Row className="mt-2 justify-content-center align-items-center">
                <Col md={6}>
                <img src="/imgFiles/reactLogo.png" width="100%"/>
                </Col>
                <Col md={6}>
                <img src="/imgFiles/threejsLogo.png" width="100%"/>
                </Col>
                </Row>
            <Row className="mt-2 justify-content-center align-items-center">
                    
                <Col md={6}>
                <img src="/imgFiles/bootstrapLogo.svg" width="110%"/>
                </Col>
                <Col md={6}>
                <img src="/imgFiles/mongoDBLogo.png" width="90%"/>
                </Col>
                </Row>
                <Row className="mt-2 justify-content-center align-items-center">
                <Col md={6}>
                <img src="/imgFiles/expressLogo.png" width="100%"/>
                </Col>
               
            </Row>
            </Col>
            </Row>
            <Row>
            <Col>
            <Row>
                <p className="d-flex align-items-center">
            <h1>

            <i className="bi bi-linkedin"></i> /cian-markwick
            </h1>
                </p>
            </Row>
            <Row>
                <p className="d-flex align-items-center">
            <h1>

            <i className="bi bi-share-fill"></i> https://cian-markwick-developer.herokuapp.com/
            </h1>
                </p>
            </Row>
            </Col>
            </Row>
        </Container>
    )

}

export default Contact;