import React, {useContext} from 'react';
import {Context as Count} from "../../providers/VoteProvider";

function BadLine() {
  const {bad, increaseBad} = useContext(Count)
  return (
      <div>
        <p>Good : {bad}</p>
        <button onClick={increaseBad}>Increase Bad</button>
      </div>
  );
}

export default BadLine;