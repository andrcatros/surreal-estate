import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/global-style";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

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
