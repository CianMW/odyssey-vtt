import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useState, useEffect, FormEvent } from "react";
import { io } from "socket.io-client";
import { useLocation } from "react-router";
import "./GameSocketStyle.css";
import GameChat from "./GameChat";
import ADDRESS from "./addressSetup.js";
import { useDispatch, useSelector } from "react-redux";
// import CharacterSheet from "../CharacterSheet";
import { setDiceRoll, setInGame } from "../../Actions";
import GameMenu from "./GameMenu";
import CharacterSheet from "../CreateCharacter/CharacterSheet";
import DiceInstance from "../DiceRoller/DiceInstance";
// import socket  from "./Socket";




const socket = io(ADDRESS, { transports: ["websocket"] });



const GameSocket = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [inGameUsers, setInGameUsers] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [connected, setConnected] = useState();

  const location = useLocation();
  const getUrlParams = location.pathname.split("/gameroom/");






  // SOCKET TEST START

  // const {socket, emitEvent, emitMessage } = SocketManager({
  //   onCallback: handleCallback,
  // });

  // function handleCallback (payload) {
  //   /** Do something with the payload */
  // };


  // SOCKET TEST END
  const joinRoom = (room) => {
    socket.emit("joinRoom", {
      gameId: room,
      username: currentState.user.info.name,
    });
  };

  useEffect(() => {

    socket.connect();
    // emitDisconnect()
    return () => {
      socket.disconnect();
    };
  }, []);

  socket.on('connect', () => {
    console.log('Connection established!')
    dispatch(setInGame(true))
    joinRoom(getUrlParams[1])
  })
  socket.on("recieve_message", setMessage);

  socket.on("loggedin", () => {
    console.log("you're logged in!");
    fetchInGameUsers();

    socket.on("newConnection", () => {
      fetchInGameUsers();
    });
  });

  socket.on("message", (newMessage) => {
    console.log("a new message appeared!");
    setChatHistory([...chatHistory, newMessage]);
  });

  socket.on("disconnect", () => {
    console.log(`disconnected!`);
    dispatch(setInGame(false));
  });

  async function handleMessageSubmit(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      const regex = /(\d*)(D\d*)((?:[+*-](?:\d+|\([A-Z]*\)))*)(?:\+(D\d*))?/gi;
      const match = regex.test(message);
      if (match){
        dispatch(setDiceRoll(message))
      } else {

        
        const newMessage = {
          text: message,
          sender: username,
          id: socket.id,
          timestamp: Date.now(),
        };
        
        // emitMessage(newMessage);
        console.log("reeee");
        setChatHistory([...chatHistory, newMessage]);
        
      }
      setMessage("");
    }
  }

  async function fetchInGameUsers() {
    console.log("fetch in game users is being fired");
    try {
      let response = await fetch(ADDRESS + "/online-users");
      if (response) {
        let { onlineUsers } = await response.json();
        // data is an array with all the current connected users
        setInGameUsers(onlineUsers);
      } else {
        console.log("error fetching the online users");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className=" m-0 p-0">
      <Row className="max-row static-full-height  d-flex m-0 p-0">
        {/* <Col md={2} className=" p-0 m-0 col-lg-2 full-height bg-blue">asdasd</Col> */}
        <Col
          md={9}
          className="justify-content-center align-items-center static-full-height-scroll px-2 m-0 d-none d-md-block col-md-8 bg-custom-textured"
          style={{overflow: "hidden"}}
        >
          <div>
          <DiceInstance/>
          <CharacterSheet />
          </div>
        </Col>
        <Col md={3} className="px-0 m-0  full-height col-12 col-md-3">
          <Row className="">
            <Col>
            <GameMenu
             chatHistory={chatHistory}
             handleMessageSubmit={handleMessageSubmit}
             message={message}
             setMessage={setMessage}
             gameId={getUrlParams[1]}
             />
            </Col>
              </Row>
                </Col>
              </Row>
            </Container>

    // <Container fluid className=' px-0'>

    //   <Row className=' my-0' style={{ height: '95vh' }}>
    //     <Col md={2} className=" bordered-hard">
    //       {/* for the users currently in game*/}
    //       <div className='mb-3'>Connected users:</div>
    //       <ListGroup>
    //         {inGameUsers.length === 0 && <ListGroupItem>No users yet!</ListGroupItem>}
    //         {inGameUsers.map((user) => (
    //           <ListGroupItem key={user.id}>{user.username}</ListGroupItem>
    //           ))}
    //       </ListGroup>
    //     </Col>
    //     {/* central space / map */}
    //     <Col sm={0} md={7} className=" bg-notebook d-none d-sm-none d-md-block bordered-hard"></Col>

    //     <Col sm={6} md={3} id="right-column" className='p-0 bordered-hard d-flex justify-content-between'>

    //       <Row className="d-flex parent-wide parent-high flex-column justify-content-between p-0 m-0">

    //           {/* Select folder */}
    //             <Row className="p-0 m-0 parent-wide mb-2">
    //             <Col md={3} className={`dynamic-folder ${selectedFolder === "chat" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("chat")}>Chat</Col>
    //             <Col md={3} className={`dynamic-folder ${selectedFolder === "characters" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("characters")}>Characters</Col>
    //             <Col md={3} className={`dynamic-folder ${selectedFolder === "library" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("library")}>Library</Col>
    //             <Col md={3} className={`dynamic-folder ${selectedFolder === "settings" ? "semi-bordered":"bordered"}`} onClick={e => setSelectedFolder("settings")}>Settings</Col>
    //             </Row>

    //           {selectedFolder === "chat" && <GameChat chatHistory={chatHistory} handleMessageSubmit={handleMessageSubmit} message={message} setMessage={setMessage}/>}
    //           <Button onClick={e => {console.log(currentState.user.info.name)}}>socket</Button>
    //       </Row>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default GameSocket;




{/* <ul class="scifiUI">
  <li>
    <input type="radio" name="tab" id="tab1" checked>
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
</ul> */}







// OLD




          //     md={3}
          //     className={`text-center dynamic-folder ${
          //       selectedFolder === "chat" ? "semi-bordered" : "bordered"
          //     }`}
          //     onClick={(e) => setSelectedFolder("chat")}
          //   >
          //     <i className="bi bi-chat-left-text-fill"></i>
          //   </Col>
          //   <Col
          //     md={3}
          //     className={`text-center dynamic-folder ${
          //       selectedFolder === "characters" ? "semi-bordered" : "bordered"
          //     }`}
          //     onClick={(e) => setSelectedFolder("characters")}
          //   >
          //     <i className="bi bi-folder-fill"></i>
          //   </Col>
          //   <Col
          //     md={3}
          //     className={`text-center dynamic-folder ${
          //       selectedFolder === "library" ? "semi-bordered" : "bordered"
          //     }`}
          //     onClick={(e) => setSelectedFolder("library")}
          //   >
          //     <i className="bi bi-search"></i>
          //   </Col>
          //   <Col
          //     md={3}
          //     className={`text-center dynamic-folder ${
          //       selectedFolder === "settings" ? "semi-bordered" : "bordered"
          //     }`}
          //     onClick={(e) => setSelectedFolder("settings")}
          //   >
          //     <i className="bi bi-gear-fill"></i>
          //   </Col>
          // </Row>
          // {selectedFolder === "chat" && (
          //   <GameChat
          //     chatHistory={chatHistory}
          //     handleMessageSubmit={handleMessageSubmit}
          //     message={message}
          //     setMessage={setMessage}
          //   />
          // )}