import React from "react";
import Draggable from "react-draggable";
import "./createCharacter.css"

const CharacterSheet = () => {
  const reference = React.createRef();

  return (
    <Draggable ref={reference}>
      <div className="code-container">
        <div className="glow-container">
          <div className="augs" data-augmented-ui></div>
        </div>

        <section className="augs bg" data-augmented-ui>
          <button className="dots" title="change mode"></button>
          <input></input>
          <div className="code highcontrast-dark">
            <textarea id="code"></textarea>
          </div>
        </section>
      </div>
    </Draggable>
  );
};

export default CharacterSheet;
