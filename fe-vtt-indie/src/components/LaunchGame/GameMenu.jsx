import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AvailableCharacters from './AvailableCharacters';
import GameCharacters from './GameCharacters';
import GameChat from './GameChat';
import Generators from './Generators';
import ImportCharacterModal from './ImportCharacterModel';





const GameMenu = ({chatHistory, handleMessageSubmit, message, setMessage, gameId}) => {
    const [modalShow, setModalShow] = useState(false);
    const currentState = useSelector(state => state)



    return (
        
        
          <Tabs style={{backgroundColor: "lightgray"}} className="scifiUI">
            <TabList>
              <Tab><i className="bi bi-chat-left-text-fill"></i></Tab>
              <Tab><i className="bi bi-folder-fill"></i></Tab>
              <Tab><i className="bi bi-dice-6-fill"></i></Tab>
              <Tab><i className="bi bi-book-half"></i></Tab>
              <Tab><i className="bi bi-gear-wide-connected"></i></Tab>
            </TabList>
        
            <TabPanel>
              <Container className="m-0 p-0">

              <GameChat
              chatHistory={chatHistory}
              handleMessageSubmit={handleMessageSubmit}
              message={message}
              setMessage={setMessage}
              />
              </Container>
            </TabPanel>
            <TabPanel>
              <GameCharacters setModalShow={setModalShow}/>
            <ImportCharacterModal
            gameId={gameId}
            show={modalShow}
            onHide={() => setModalShow(false)} />
            <AvailableCharacters gameId={gameId}/>
            </TabPanel>
            <TabPanel>
                <Generators/>
            </TabPanel>
            <TabPanel>
                <p>lib</p>
            </TabPanel>
            <TabPanel>
                <Link to={`/`+ currentState.user.info._id}>
            <Button variant="danger" >Exit Game</Button>
                </Link>
            </TabPanel>
          </Tabs>
    )
}

export default GameMenu
