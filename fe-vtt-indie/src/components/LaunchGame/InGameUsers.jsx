import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useDispatch, useSelector } from "react-redux"





const InGameUsers = () => {
const currentState = useSelector(state => state)
const dispatch = useDispatch()

    return(
        <div className="inGameUsers" style={{maxWidth:"100px", position:"absolute", left:"5px", top:"50px"}}>
            <Row>
                <p className="text-white fw-bold text-center border-bottom">Active Aces</p>
            </Row>
            <Row className="inGameUsers-container">
            <Col className="justify-content-center">
            <div className="" data-augmented-ui="   tr-clip bl-rect both">
            <img src={currentState.user.info.avatar} width="100px"/>
            </div>
            <p className="text-light text-center">{currentState.user.info.name}</p>
            </Col>
            </Row>
        </div>
    )
}

export default InGameUsers