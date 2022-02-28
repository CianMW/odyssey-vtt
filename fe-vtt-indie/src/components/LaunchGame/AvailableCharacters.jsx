import React from "react"
import { Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"



const AvailableCharacters = ({gameId}) => {
    const currentState = useSelector(state => state)
    const dispatch = useDispatch()

    const dynamicLoad = (e) => {
       return React.creatElement("h1", {className:"d-flex"}, "hello here")
    }

    const currentGame = currentState.user.info.games.filter(game => game._id === gameId)
    console.log(currentGame)
    return (<>{
        currentGame[0].characters.length > 0 ? (
        currentGame[0].characters.map(char => (
                <Row className="justify-content-center">
                   <p>
                        {char.characterName}
                       </p>
                </Row>
            ))) : (<></>)
    }
    <button onClick={e => dynamicLoad(e)}>click here</button>
   </>)
}

export default AvailableCharacters