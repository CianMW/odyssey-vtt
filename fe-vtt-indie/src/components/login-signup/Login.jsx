import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Tooltip from "react-bootstrap/Tooltip"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBasicAuth, setLoggedIn, setUser } from "../../Actions";

const Login = ({ setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(email, password);
  }, [password, email]);

  let navigate = useNavigate();

  const signIn = async () => {
    const creds = email + ":" + password;
    const b64Auth = await btoa(creds);
    console.log(b64Auth);
    const b64Authentication = "basic " + b64Auth;

    const response = await fetch("http://localhost:3150/user/me", {
      headers: {
        authorization: b64Authentication,
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
      dispatch(setBasicAuth(b64Authentication));
      console.log("here is the user: ", data);
      await dispatch(setLoggedIn(true));
      await navigate(`/`, { replace: true });
    }
  };
  return (
    <div className="d-flex parent-size align-items-center">
      <Container fluid className="mt-0">
        <Row className="header-block"></Row>
        <Container className="mt-5">
          <Row className="justify-content-center align-items-center">
            <Col sm={12} md={8} lg={6} className="mt-5 bordered-login p-3">
              <Row>
                <Col>
                  <h4 className="sign-in-title">Log In</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      className="justify-content-center"
                      id="basic-addon1"
                    >
                      <span>Email</span>
                    </InputGroup.Text>
                    <FormControl
                      placeholder="input email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        setEmail(e.currentTarget.value);
                      }}
                      value={email}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      className="justify-content-center"
                      id="basic-addon1"
                    >
                      <span>Password</span>
                    </InputGroup.Text>
                    <FormControl
                      type="password"
                      placeholder="enter password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        setPassword(e.currentTarget.value);
                      }}
                      value={password}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col sm={6}>
                  <div className="d-flex justify-content-center">
                    <div
                      onClick={(e) => signIn()}
                      className="button-red  inverted-glow"
                      as="Link"
                    >
                      <span>
                        Enter <i class="fas fa-dice-d20"></i>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3">
                <Col sm={6}>
                  <small className="d-flex justify-content-center">
                    <OverlayTrigger
                      key={"bottom"}
                      placement={"bottom"}
                      overlay={
                        <Tooltip id={`tooltip-bottom`}>
                          <Row className="text-center">

                          <p>Email: testUser1@gmail.com</p>
                          <p>Password: spaceAce1</p>
                          </Row>
                        </Tooltip>
                      }
                    >
                    <a>
                      <p style={{color:"#107CDF", cursor:"pointer"}}>Want to test the app?</p>
                    </a>

                    </OverlayTrigger>
                  </small>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Login;
