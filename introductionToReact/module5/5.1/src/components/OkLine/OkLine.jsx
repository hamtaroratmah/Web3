import React, {useContext} from 'react';
import {Context as Count} from "../../providers/VoteProvider";

function OkLine() {
  const {ok, increaseOk} = useContext(Count)
  return (
      <div>
        <p>Ok : {ok}</p>
        <button onClick={increaseOk}>Increase Ok</button>
      </div>
  );
}

export default OkLine;