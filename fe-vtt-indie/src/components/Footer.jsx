
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

import "../styleSheets/mainFooterStyle.css"


const MainFooter = () => {
    return(

  <Navbar id="mainFooter" className="parent-width" bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand href="#home">
        <span>Odyssey
            <small> VTT</small>
            </span>
      </Navbar.Brand>
    </Container>
  </Navbar>
        
    )
}

export default MainFooter