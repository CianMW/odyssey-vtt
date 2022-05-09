import thunk from "redux-thunk";
import dotenv from "dotenv/config";

import { Dispatch } from "react";
import { useSelector } from "react-redux";


export const setBasicAuth = (auth) => {
  return async (dispatch) => {
    console.log("THIS IS THE base 64 auth", auth);

    dispatch({
      type: "SETBASEAUTH",
      payload: auth,
    });
  };
};
export const setUser = (user) => {
  return async (dispatch) => {
    console.log("THIS IS THE user", user);

    dispatch({
      type: "SETUSER",
      payload: user,
    });
  };
};

export const addOpenChar = (char) => {
  return async (dispatch) => {
    console.log("THIS IS THE character", char);
    dispatch({
      type: "ADDOPENCHAR",
      payload: char,
    });
  };
};
export const setCharacterClosed = (char) => {
  console.log("here's the character ID", char);
  return async (dispatch) => {
    dispatch({
      type: "SETCHARACTERCLOSED",
      payload: char,
    });
  };
};


export const updateSystem = () => {
  return async (dispatch) => {
    const currentState = useSelector((state) => state);
    const updateUser = async () => {
      const response = await fetch(`${process.env.REACT_APP_SOCKETSERVER}/user/me`, {
        headers: {
          authorization: currentState.auth.b64Auth,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data));
        console.log("here is the user: ", data);
      } else {
        console.log("error with update");
      }
    };
    updateUser();

  };
};
  
  export const setLoggedIn = (val) => {
    return async (dispatch) => {
      dispatch({
        type: "SETLOGGEDIN",
        payload: val,
      });
    };
  };
  
  export const setInGame = (bool) => {
    return async (dispatch) => {
      dispatch({
        type: "SETINGAME",
        payload: bool,
      });
    };
  };
  export const setToast = (boolCont) => {
    return async (dispatch) => {
      dispatch({
        type: "SETTOAST",
        payload: boolCont,
      });
    };
  };
  export const setDiceRoll = (notation) => {
    return async (dispatch) => {
      dispatch({
        type: "SETDICEROLL",
        payload: notation,
      });
    };
  };
  export const setDiceRollResult = (result) => {
    return async (dispatch) => {
      dispatch({
        type: "SETDICEROLLRESULT",
        payload: result,
      });
    };
  };
  
 