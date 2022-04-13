
import { Row, Col, Container, Accordion } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { CButton } from "../../SingleComponents/CButton";
import CyberButton from "../../SingleComponents/CyberButton";


const RecentGames = ({setModalShow}) => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();


    return(
         <Container className="py-2">
                <Row className="p-0 m-0">

            {currentState.user.info.games.length > 0 ? (currentState.user.info.games.filter((game, idx) => idx <= 3).map((game) => ( 
              <Col key={Math.random()} className="col-12 p-0 m-0">
                 <Row className="justify-content-center align-items-center gx-0">
                          <Col className="col-6 p-0 m-0" sm={6}>
                    <span className="text-wrap">{game.name}</span>
                          </Col>
                          <Col className="col-6 p-0 m-0">
                          <div className="d-flex justify-content-center">
                            <CButton label="  Launch Game" link={`/gameroom/${game._id}`} type="primary" icon="fas fa-dice-d20"></CButton>
                    </div>
                          </Col>
                  <Col className="col-12 p-0 m-0">
                  <span>Last Played: {new Date(game.updatedAt).toLocaleString().split(",")[0]}</span>
                  </Col>
                 </Row>
              </Col>
            ))) : (<h6 className="text-muted text-center">Nothing to report here cadet !</h6>)}
            </Row>
            <Row className="justify-content-center" style={{bottom:"0"}}>
              <CyberButton callback={e => setModalShow(true)} text="+ New Game"/>
            </Row>
          </Container>
    
    ) 
}

export default RecentGames