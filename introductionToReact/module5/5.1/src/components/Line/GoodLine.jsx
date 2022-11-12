import React, {useContext} from 'react';
import {Context as Count} from "../../providers/VoteProvider";

function GoodLine() {
  const {good, increaseGood} = useContext(Count)
  return (
      <div>
        <p>Good : {good}</p>
        <button onClick={increaseGood}>Increase good</button>
      </div>
  );
}

export default GoodLine;