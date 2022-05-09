import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


const GameCharacters = ({setModalShow}) => {



    return(
        <Container className="m-0 p-0" >
            <Row>
            <Button onClick={e => setModalShow(true)} variant="outline-secondary" size="sm">+ Import Character</Button>
            </Row>
            {/* <AvailableCharacters/> */}
        </Container>
    )
}

export default GameCharacters 