import React, {Component, useContext} from 'react';
import ResetButton from "../Lines/Lines";
import GoodLine from "../Line/GoodLine";
import BadLine from "../BadLine/BadLine";
import OkLine from "../OkLine/OkLine";

function App() {
  return (
      <div className="App">
        <GoodLine/>
        <BadLine/>
        <OkLine/>
        <ResetButton/>
      </div>
  );

}

export default App;
