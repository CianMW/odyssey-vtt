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
              <Container>

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




{/* <ul class="scifiUI">
  <li>
    <input type="radio" name="tab" id="tab1" checked/>
    <label for="tab1">Tab1</label>
    <div class="section">
     The user interface, in the industrial design field of human–machine interaction, is the space where interactions between humans and machines occur. The goal of this interaction is effective operation and control of the machine on the user's end, and feedback from the machine, which aids the operator in making operational decisions. Examples of this broad concept of user interfaces include the interactive aspects of computer operating systems, hand tools, heavy machinery operator controls, and process controls. The design considerations applicable when creating user interfaces are related to or involve such disciplines as ergonomics and psychology.
    </div>
  </li>
  <li>
    <input type="radio" name="tab" id="tab2" />
    <label for="tab2">Tab2</label>
    <div class="section">
    User Experience (UX) involves a person's behaviors, attitudes, and emotions about using a particular product, system or service. User Experience includes the practical, experiential, affective, meaningful and valuable aspects of human-computer interaction and product ownership. Additionally, it includes a person’s perceptions of system aspects such as utility, ease of use and efficiency. User Experience may be considered subjective in nature to the degree that it is about individual perception and thought with respect to the system. User Experience is dynamic as it is constantly modified over time due to changing usage circumstances and changes to individual systems as well as the wider usage context in which they can be found.
    </div>
  </li>
  <li>
    <input type="radio" name="tab" id="tab3" />
    <label for="tab3">Tab3</label>
    <div class="section">
      Interactive Design is defined as a user-oriented field of study that focuses on meaningful communication of media through cyclical and collaborative processes between people and technology. Successful interactive designs have simple, clearly defined goals, a strong purpose and intuitive screen interface.
    </div>
  </li>
  <li>
    <input type="radio" name="tab" id="tab4" />
    <label for="tab4">Tab4</label>
    <div class="section">
      In computer science, functional programming is a programming paradigm, a style of building the structure and elements of computer programs, that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It is a declarative programming paradigm, which means programming is done with expressions. In functional code, the output value of a function depends only on the arguments that are input to the function, so calling a function f twice with the same value for an argument x will produce the same result f(x) both times. Eliminating side effects, i.e. changes in state that do not depend on the function inputs, can make it much easier to understand and predict the behavior of a program, which is one of the key motivations for the development of functional programming.
    </div>
  </li>
</ul>  */}