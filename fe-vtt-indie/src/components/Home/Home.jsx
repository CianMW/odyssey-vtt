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
const Home = () => {
  const [games, setGames] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();

  const updateUser = async () => {
    const response = await fetch("http://localhost:3150/user/me", {
      headers: {
        authorization: currentState.auth.b64Auth,
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
      console.log("here is the user: ", data);
    }
  };

  useEffect(() => {
    // fetchUserData()
    updateUser();
    console.log(location.pathname);
  }, []);

  return (
      <Container className="background-grayed">
        <Row >
          <Col className="dashboard-home col-12">
            <div>
              <h4 className="mt-2 bottom-border text-center">Dashboard</h4>
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
        show={modalShow}
        onHide={() => setModalShow(false)}/>

                <Tilt  tiltAngleXInitial={0} tiltAngleYInitial={-45} className="left-panel">
                  <div data-augmented-ui="tr-clip bl-clip br-round both " className="bd21">

             <RecentGames setModalShow={setModalShow}/>
                  </div>
                </Tilt>


          </Col>
          <Col className="m-0 p-0 col-4 col-4 flex-row ">
                <Tilt tiltAngleXInitial={0} tiltAngleYInitial={45} className="right-panel">

                <div data-augmented-ui="tl-clip br-clip bl-round both" className="bd21">
             <MyCharacters/>
                </div>
                </Tilt>

          </Col>

            </Row>
          {/* --------------- */}
          </Col>

        </Row>
      </Container>
  );
};

export default Home;
