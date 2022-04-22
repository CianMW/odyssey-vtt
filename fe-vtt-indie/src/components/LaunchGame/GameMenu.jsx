import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LibrarySearch from '../../SingleComponents/LibrarySearch';
import AvailableCharacters from './AvailableCharacters';
import GameCharacters from './GameCharacters';
import GameChat from './GameChat';
import Generators from './Generators';
import ImportCharacterModal from './ImportCharacterModel';





const GameMenu = ({updateUser, chatHistory, handleMessageSubmit, message, setMessage, gameId}) => {
    const [modalShow, setModalShow] = useState(false);
    const currentState = useSelector(state => state)



    return (
        
        
          <Tabs style={{backgroundColor: "#dfe5ed", height: "100vh", overflow: "hidden"}} className="scifiUI">
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
            <TabPanel style={{height:"100%", overflow:"hidden"}}>
              <GameCharacters setModalShow={setModalShow}/>
            <ImportCharacterModal
            updateUser={updateUser}
            gameId={gameId}
            show={modalShow}
            onHide={() => setModalShow(false)} />
            <AvailableCharacters updateUser={updateUser} gameId={gameId}/>
            </TabPanel>
            <TabPanel>
                <Generators/>
            </TabPanel>
            <TabPanel>
                <LibrarySearch/>
            </TabPanel>
            <TabPanel>
              <Row className="d-flex justify-content-center">

                <Link to="/" >
            <Button variant="danger" >Exit Game</Button>
                </Link>
              </Row>
            </TabPanel>
          </Tabs>
    )
}

export default GameMenu
