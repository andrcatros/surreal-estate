import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/global-style";

import NavBar from "./navbar";
import Properties from "./properties";
import AddProperty from "./add-property";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route exact path="/add-property">
          <AddProperty />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
