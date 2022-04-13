import { Button, Container, Row } from "react-bootstrap"
import AvailableCharacters from "./AvailableCharacters"


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