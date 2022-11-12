import React from 'react';
import {VoteProvider as Provider} from "../../providers/VoteProvider";
import App from "../App/App";

function AppLoader() {
  return (
      <Provider>
        <App/>
      </Provider>
  );
}

export default AppLoader;