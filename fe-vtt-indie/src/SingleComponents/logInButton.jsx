import { Col, Row } from "react-bootstrap"
import { useState } from "react";
import { Link } from "react-router-dom";



const LogInButton = () => {
const [logInButton, setLogInButton] = useState("  tl-scoop tr-clip-x both");
const [signUpButton, setSignUpButton] = useState("tr-scoop tl-clip-x both");



    return (
        <Row className="mt-5 ">
                 <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Link to="/login" className="/login">
                     <Row onMouseLeave={e => setLogInButton("  tl-scoop tr-clip-x both")} onMouseEnter={e => {setLogInButton("   tl-clip t-rect tr-clip r-rect br-clip b-rect bl-clip l-rect both")}} className="d-flex align-items-center justify-content-center text-center styleme" data-augmented-ui={logInButton} >
                         <span><b>

                     Log In
                         </b>
                         </span>
                         </Row>
                    </Link>
                
                 </Col>
                 <Col md={6} className="d-flex justify-content-center align-items-center">
                
                <Row onMouseLeave={e => setSignUpButton("  tr-scoop tl-clip-x both")} onMouseEnter={e => {setSignUpButton("   tl-clip t-rect tr-clip r-rect br-clip b-rect bl-clip l-rect both")}} className="d-flex align-items-center justify-content-center text-center styleme" data-augmented-ui={signUpButton} >
                    <span><b>

                Sign Up
                    </b>
                    </span>
                    </Row>
           
            </Col>
             </Row>
    )
}

export default LogInButton