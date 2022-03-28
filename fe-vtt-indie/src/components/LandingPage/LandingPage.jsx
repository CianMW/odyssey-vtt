import { Container, Row , Col, Button} from "react-bootstrap"
import LoginNavBar from "../login-signup/LoginNavBar"
import { Link } from "react-router-dom"
import "../../styleSheets/landingPageStyle.css"
import ThreeScene from "../ThreeJS/three-scene"
import SpaceAcesLogo from "./SpaceAcesLogo"
import LogInButton from "../../SingleComponents/logInButton"

const LandingPage = () => {

    return(
        <div className="landing-page-container">

        <div id="stars"></div>
       <div id="stars2"></div>
       <div id="stars3"></div>
    
        <div className="starry-background m-0 d-flex align-items-center flex-column"> 
 
            {/* <Container className="landing-folder parent-size m-0 p-0"  > */}
             {/* <ThreeScene/> */}
             <Row className="m-0 p-0 ">

            <SpaceAcesLogo/>

             </Row>
             <Container className="m-0 p-0 justify-content-center">

             <LogInButton/>
             </Container>
             
            {/* </Container> */}
            <Row className="m-0 p-0 data-pad-container">
            <img src="/imgFiles/dataPad.png" className="data-pad" alt="image of a data pad"/>
            <Row className=" m-0 p-0 text-center main-text">
            <h2>Welcome to the Space Ace Brigade</h2>
            <h4 className="text-center">
                The galactic gig economy is alive and thriving. The Galaxy is chock full of things that need doing, anomalies that need exploring, and pickles that need unpickling.
            </h4>
            <h4>
            You, dear recruits, are just the ones to do them! You won't live to regret your choice…
            </h4>
            <h4>
            Mostly competent and highly motivated is good enough in our books. Remember, the contract is sacred, your debts are real, and the alternatives ain't that great. So buck up and strap in! Adventure Awaits!
            </h4>
            </Row>
            </Row>
        </div>
        </div>
    )
}

export default LandingPage