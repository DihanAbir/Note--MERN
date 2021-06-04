import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Landing from "./screen/Landing";
import Footer from "./component/Footer";
import AllNotes from "./screen/AllNotes";
import Menu from "../src/component/Menu";
import SubscribeNow from "./component/SubscribeNow";
import Login from "./screen/Login";
import Profile from "./screen/Profile";
function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/all_notes" component={AllNotes} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route exact path="/note_description" component={NoteDescription} /> */}
      </Switch>
      <SubscribeNow />
      <Footer />
    </Router>
  );
}

export default App;
