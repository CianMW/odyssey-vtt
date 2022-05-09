import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Row from "react-bootstrap/Row"
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../Actions";
import { askTheAI } from "../GeneratorFunctions";



const AskTheAI = () => {
    const [chance, setChance] = useState("");
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
      const textContent = askTheAI(chance)
      const payload = {
          isOpen: true,
          content: textContent
      }
      dispatch(setToast(payload))
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