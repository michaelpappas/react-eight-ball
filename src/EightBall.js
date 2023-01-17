import React, { useState } from "react";
import "./EightBall.css";
import randomChoice from "./helper";
import messages from "./messages";

/** Gives a random answer when clicked and turnes to appropriate color.
 *
 * Props:
 * - answers
 *
 * State:
 * - answer
 *
 */
function EightBall({ answers = messages }) {
  const [answer, setAnswer] = useState({
    msg: "Think of a question",
    color: "black"
  });

  /**  calls setAnswer on a random answer when clicked */
  function handleClick() {
    setAnswer(randomChoice(messages));
  }


  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
      className="EightBall">
      <b>{answer.msg}</b>
    </div>
  );
}

export default EightBall;
