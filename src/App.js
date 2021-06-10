import React from 'react'
import ReactDOM from 'react-dom'  
import "./App.css";
import { BrowserRouter as Router, Switch, Route , withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./screen/Landing";
import AllNotes from "./screen/AllNotes";
import Menu from "../src/component/Menu";
import NoteDescription from "./component/NoteDescription.js";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Dashboard from './screen/Dashboard';



function App(props) {

  return (
    <Router>
          {
            props.location.pathname!=='/dashboard' ? <Menu/>:null 
          }
       {/* <Menu /> */}
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/all_notes" component={AllNotes} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/note_description" component={NoteDescription} />
      </Switch>

      {
        props.location.pathname!=='/dashboard' ? <Footer/>:null 
      }
    
      {/* <Footer /> */}
    </Router>
  );
}

export default withRouter(App);
