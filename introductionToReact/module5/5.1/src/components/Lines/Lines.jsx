import React, {useContext} from 'react';
import {Context as Count} from "../../providers/VoteProvider";

function Lines() {
  const {resetAll} = useContext(Count)

  return (
      <div>
        <button onClick={resetAll}>Reset All</button>
      </div>
  );
}

export default Lines;