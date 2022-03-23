import { Container, Row , Col, Button} from "react-bootstrap"
import LoginNavBar from "../login-signup/LoginNavBar"
import { Link } from "react-router-dom"
import "../../styleSheets/landingPageStyle.css"
import ThreeScene from "../ThreeJS/three-scene"


const LandingPage = () => {

    return(
    
        <div className="parent-size background-cover">
            <Container className="landing-folder parent-size m-0 p-0"  >
             {/* <ThreeScene/> */}
            <ThreeScene/>

             
            </Container>
        </div>
        
    )
}

export default LandingPage