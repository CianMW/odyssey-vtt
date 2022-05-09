import { BrowserRouter as Router, Route, Routes, useParams, useLocation } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Login from './components/login-signup/Login';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/login-signup/SignUp';
import { useState } from 'react';
import GameSocket from './components/LaunchGame/GameSocket';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './Actions';
import TopNav from './components/TopNav';
import MainSideBar from './components/MainSideBar';
import './App.css';
import LandingSideBar from './components/LandingSideBar';
import SciFiToast from './SingleComponents/SciFiToast';
import Contact from './components/Contact/Contact';
import Container from 'react-bootstrap/Container';
function App() {
  const [wid, setWid] = useState("closed");
  const [display, setDisplay] = useState("inline-block");
  const currentState = useSelector(state => state)
 const dispatch = useDispatch()
 console.log("beans")

 const openSideNav = () => {
  setWid("open")
  setDisplay("none")
}

const closeSideNav = () => {
  setWid("closed")
  setDisplay("inline-block")
}


const updateUser = async () => {
  const response = await fetch("http://localhost:3150/user/me", {
    headers: {
      authorization: currentState.auth.b64Auth,
    },
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    console.log("here is the user: ", data);
  }
};

const loggedIn = currentState.data.loggedIn ? "none" : "block"


  return (
      <Container  className=" full-parent-size m-0 p-0 full-length column-wrapper">
            <SciFiToast/>
          <Router>
            { !currentState.data.inGame &&
          <TopNav openSideNav={openSideNav} loggedIn={loggedIn} display={display}/>
            }

          {
            currentState.data.loggedIn ? (
              <MainSideBar closeSideNav={closeSideNav} wid={wid} />
            ):(
              <LandingSideBar closeSideNav={closeSideNav} wid={wid} />
              )
            }
            <div className="max-height">
          <Routes>
            {
              currentState.data.loggedIn ? (
               <Route path="/" element={<Home updateUser={updateUser}/>}/>
               ) : (
               <Route exact path="/" element={<LandingPage/>}/>
               )
            }
            <Route path="/gameroom/:gameId" element={<GameSocket updateUser={updateUser}/>}/>
            <Route path="/character" element={<CharacterSheet/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>


          </Routes>
          </div>
          </Router>

          {/* {!currentState.data.inGame && 
           <MainFooter/>
          } */}
          
          </Container>
  );
}

export default App;
