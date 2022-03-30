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
            <Row className="text-center mb-5 align-items-center" >
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <img src="/imgFiles/2159.jpg" style={{maxWidth: "50vw", zIndex: "100000"}}/>
                </Col>
                    
                <Col md={6} className=" justify-content-between align-items-between ">

                {/* <img src="/imgFiles/2006.jpg" style={{width: "100vw", height: "100%"}}/> */}
                <h1 className="tethered-heading">
                Space Aces - What Is It?
                </h1>
            
                <div>

                <p>
                Space Aces is an homage to an undying love of happy, hopeful, & campy Sci Fi. A modular, lightweight, optimistic sci-fi tabletop adventure game toolbox for GM-led groups, co-op & solo play. Packed with over 75 tables, oracles & procedural generators for creating near-endless light-hearted rollicking romps through space a la Star Trek meets Futurama meets Hitchhikers Guide To The Galaxy.
                </p>
                <p>
                Space Aces: TNG (The New Guidebook) features simple, sleek, flexible rules with easy & collaborative madlibs spark table style mission generation complete with a twist.
                </p>
                </div>
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default LandingPage