import { useState } from "react";
import { dataAttributes } from "./data/attributes.js";
import { Dice } from "./diceBox.js";
import Attributes from "./Attributes";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDiceRoll } from "../../Actions/index.js";

// initialize the Dice Box outside of the component
Dice.init().then(() => {
  // clear dice on click anywhere on the screen
  document.addEventListener("mousedown", () => {
    const diceBoxCanvas = document.getElementById("dice-canvas");
    if (window.getComputedStyle(diceBoxCanvas).display !== "none") {
      Dice.hide().clear();
    }
  });
});

const DiceInstance = () => {
  
  const [attr, setAttr] = useState(dataAttributes);
  const [pendingRoll, setPendingRoll] = useState();
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

useEffect(() => {
  if (currentState.data.diceNotation.includes("d")) {
    rollDice(currentState.data.diceNotation);
  }
  dispatch(setDiceRoll(""))
  
}, [currentState.data.diceNotation]);

  // This method is triggered whenever dice are finished rolling
  Dice.onRollComplete = (results) => {
    console.log(results);

    const newState = { ...attr };

    if (pendingRoll === "all") {
      Object.keys(newState).forEach((attr, i) => {
        newState[attr].total = results[i].value;
      });
    } else {
      newState[pendingRoll].total = results[0].value;
    }
    setAttr(newState);
  };

  // update attribute from numerical input
  const updateAttributes = (newState) => {
    console.log("update the attributes");
    setAttr(newState);
  };

  // trigger dice roll
  function rollDice(notation){
    // save which attribute we're rolling for
    // trigger the dice roll
    Dice.show().roll(notation);
  };

  return (
    <div className="mt-5">
      <Attributes
        attributes={attr} // pass in attribute numbers from App state
        onRoll={rollDice} // pass down roll function
        onChange={updateAttributes} // pass down onChange function
      />
    </div>
  );
}


export default DiceInstance;