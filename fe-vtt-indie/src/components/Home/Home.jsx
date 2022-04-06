import { Row, Container, Col, Accordion } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setLocation, setUser } from "../../Actions/index.js";
import "../../styleSheets/homeStyle.css";
import RecentGames from "./RecentGames.jsx";
import MyCharacters from "./MyCharacters.jsx";
import MyVerticallyCenteredModal from "../CreateGame/NewGameModal.jsx";
import Tilt from "react-parallax-tilt"


const Home = ({ updateUser }) => {
  const [games, setGames] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();


  useEffect(() => {
    // fetchUserData()
    const timedFunc = async () => {
   await updateUser();
    }
    timedFunc();
    console.log(location.pathname);
  }, []);

  useEffect(() => {
   setTimeout(() => {
      setIsReady(true)}
      ,3000) 
  }, []);

  return (
      <>
    <header className={isReady && "ready"}>
  <div className="box"></div>
  <div className="curve">
    <div className="left"><div></div></div>
    <div className="center"></div>
    <div className="right"><div></div></div>
  </div>
</header>

      <Container className="background-grayed">
        <Row >
          <Col className="dashboard-home col-12">
            <div>
              <h2 className="mt-4 text-center">Your Personal Terminal</h2>
              {/* <Link to="/createGame">
                    <h6>
                      <i className=" bold bi bi-plus-lg"></i> create a new game{" "}
                    </h6>

              </Link> */}
              {/* 
                SEARCH component = search for game by name , tag or player 
                If no games found display others  
                IF no games at all => "you're not yet part of any gamers, find a game?"
                */}
            </div>
            <Row className="db-div-cont d-flex justify-content-center">
          <Col className="m-0 p-0 col-8 col-md-8 flex-row ">
          <MyVerticallyCenteredModal
          updateUser={updateUser}
        show={modalShow}
        onHide={() => setModalShow(false)}/>

                <Tilt  tiltAngleXInitial={0} tiltAngleYInitial={-45} className="left-panel">
                  <div data-augmented-ui="tr-clip bl-clip br-round both " className="bd21">

             <RecentGames updateUser={updateUser} setModalShow={setModalShow}/>
                  </div>
                </Tilt>


          </Col>
          <Col className="m-0 p-0 col-4 col-4 flex-row ">
                <Tilt tiltAngleXInitial={0} tiltAngleYInitial={45} className="right-panel">

                <div data-augmented-ui="tl-clip br-clip bl-round both" className="bd21">
             <MyCharacters  updateUser={updateUser}/>
                </div>
                </Tilt>

          </Col>

            </Row>
          {/* --------------- */}
          </Col>

        </Row>
      </Container>
      <footer className={isReady && "ready"}>
      <div className="curve">
        <div className="left"><div></div></div>
        <div className="center"></div>
        <div className="right"><div></div><div><a href=""><i class="fab fa-facebook-f"></i></a><a href=""><i class="fab fa-instagram"></i></a><a href=""><i class="fab fa-twitter"></i></a><a href=""><i class="fas fa-envelope"></i></a></div></div>
      </div>
      <div className="box"></div>
    </footer>
    </>
  );
};

export default Home;
