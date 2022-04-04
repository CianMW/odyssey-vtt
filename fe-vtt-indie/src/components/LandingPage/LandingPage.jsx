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
                <div data-augmented-ui="  tl-clip-inset tr-clip-inset r-clip-y br-clip-inset bl-clip-inset l-clip-y both">
                    <img src="https://i.ibb.co/yVhdVhC/2262.jpg" style={{maxWidth: "50vw", zIndex: "100000"}}/>
                    </div>
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
            <Container>
                <Row className="text-center">
                <h1>What Can You Do In Space Aces?</h1>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Generate over 100 million missions</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Delve dangerous space wrecks and ruins</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Hex crawl thousands of unique and populated planets</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Generate endless sectors of space and travel them with over 10,000 space travel encounters</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Simple character creation or complex life path generation to create a Space Ace with baggage!</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Quick on-the-fly NPC generation complete with personality and SECRETS…</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Craft unique gizmos & gadgets, woo beasties to become your besties, battle massive monsters in mega mechs, travel the cosmos in one-of-a-kind starships, and more…</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Engage in simple space combat that keeps the whole crew engaged. Face off against wandering omnipotent entities. Explore thousands of space anomalies.</b></span></Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center"><img src="/imgFiles/green-ship.png" width="200px"/></Col>
                <Col md={8} className=""><span><b>Dare to play on Shark Jumping Mode, Hard Mode, and so much more… all in 24 full-color richly illustrated pages.</b></span></Col>
                </Row>
            </Container>
            <Container>
                <Row className="text-center">
                    <h1>The Author // Buy The Game</h1>
                </Row>

            <Row className="justify-content-center align-items-center">
                <Col md={5}>
                <div data-augmented-ui="  all-hex border " className="tester" style={{width: "50%"}}>
                    <img src="https://i.ibb.co/NjXrdBC/astronaut-bear-og.jpg" style={{width: "100%"}} />
                    </div>
                    </Col>
                <Col md={5}>
                    <span>Space Aces was written / created by Stephen Dick a.k.a P0rthos <span className="secret-code">(space ace code)</span> and successfully Kickstarted in 2021.  The idea was to provide a toolbox for players to play the game in the setting of their choice, or develop/discover it through play.
                    </span>
                    <br/>
                    <p>Stephen has just wrapped up another Space Aces Kickstarter <b>Space Aces: Voyages In Infinite Space</b>, we recommend you check it out </p>
                    <p>Want to support the game? Then buy a copy !</p>
                    <br/>
                    <div className="d-flex align-items-center justify-content-around">
                    <a href="https://p0rthos47.itch.io/space-aces-tng" target="_blank">
                    <img src="/imgFiles/badge-color.svg" style={{maxWidth:"200px", cursor: "pointer"}}/>
                    </a>
                    <a href="https://www.kickstarter.com/projects/spaceaces/space-aces-voyages-in-infinite-space-galactic-sandbox-ttrpg" target="_blank">
                    <img src="https://ksr-static.imgix.net/xr7jn0op-kickstarter-logo-k-green.png?ixlib=rb-2.1.0&s=c6655f6eaeaadc3f6544d877efb2b098" style={{maxWidth:"100px", cursor: "pointer", zIndex: "300000000"}}/>
                    </a>
                    </div>
                    </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Col md={12}>
                    <div data-augmented-ui="tl-clip-y tr-clip-y br-round-inset b-scoop-xy bl-round-inset">

                    </div>
                </Col>
            </Row>
            </Container>
        </div>
        </div>
    )
}

export default LandingPage