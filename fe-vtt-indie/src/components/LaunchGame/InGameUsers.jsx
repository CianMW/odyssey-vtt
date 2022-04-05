import { Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"





const InGameUsers = () => {
const currentState = useSelector(state => state)
const dispatch = useDispatch()

    return(
        <div className="inGameUsers" style={{maxWidth:"100px", position:"absolute", left:"5px", top:"50px"}}>
            <Row>
                <p className="text-center border-bottom">Active Aces</p>
            </Row>
            <Row className="inGameUsers-container">
            <Col className="justify-content-center">
            <div>
            <img src={currentState.user.info.avatar} width="100px"/>
            </div>
            <p className="text-center">{currentState.user.info.name}</p>
            </Col>
            </Row>
        </div>
    )
}

export default InGameUsers