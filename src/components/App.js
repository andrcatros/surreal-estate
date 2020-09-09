import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/global-style";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Favourites from "./Favourites";
import FavouriteDetail from "./FavouriteDetail";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (res) => {
    setUserID(res.id);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserID("");
  };
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <Switch>
        <Route exact path="/">
          <Properties userID={userID} />
        </Route>
        <Route exact path="/add-property">
          <AddProperty />
        </Route>
        <Route exact path="/favourites">
          <Favourites userID={userID} />
        </Route>
        <Route exact path="/favourites/detail">
          <FavouriteDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
