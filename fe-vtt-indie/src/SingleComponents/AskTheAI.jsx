import { useState } from "react";
import { Button, ButtonGroup, Row } from "react-bootstrap"
import { askTheAI } from "../GeneratorFunctions";



const AskTheAI = () => {
    const [chance, setChance] = useState("");

    useEffect(() => {
      askTheAI(chance)
    

    }, [chance])
    

    return (
        <Row>
            
    <ButtonGroup aria-label="Basic example">
        <Button onClick={e => setChance(5)} variant={chance === 5 ? "outline-dark":"dark"}>Likely</Button>
        <Button onClick={e => setChance(10)} variant={chance === 10 ? "outline-dark":"dark"}>Possible</Button>
        <Button onClick={e => setChance(15)} variant={chance === 15 ? "outline-dark":"dark"}>Unlikely</Button>
    </ButtonGroup>
        </Row>
    )
}


export default AskTheAI