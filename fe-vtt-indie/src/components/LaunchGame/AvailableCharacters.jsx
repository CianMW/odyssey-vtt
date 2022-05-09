import React from "react"
import Row from "react-bootstrap/Row"
import { useDispatch, useSelector } from "react-redux"
import { addOpenChar } from "../../Actions"
import { completeMissionGenerator } from "../../GeneratorFunctions"



const AvailableCharacters = ({gameId}) => {
    const currentState = useSelector(state => state)
    const dispatch = useDispatch()

    const dynamicLoad = (e) => {
       let mission = completeMissionGenerator()
      console.log("Returned Mission", mission)
    }

    const currentGame = currentState.user.info.games.filter(game => game._id === gameId)
    console.log(currentGame)
    return (
        <div style={{height: "100%"}}>

        {
            currentGame[0].characters.length > 0 ? (
        currentGame[0].characters.map(char => (
                <Row className="d-flex justify-content-center  border-bottom border-secondary border-2 mx-2" onClick={e => dispatch(addOpenChar(char))} style={{cursor:"pointer"}}>
                  <p className="  text-start d-flex align-items-center align-bottom availableCharacterName mt-1">
                  <img src={char.avatar} style={{width:"100px"}} /> 
                        {char.characterName}
                       </p>
                </Row>
            ))) : (<></>)
        }
        </div>
        )
}

export default AvailableCharacters