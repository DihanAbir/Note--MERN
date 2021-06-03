import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./screen/Landing";
import AllNotes from "./screen/AllNotes";
import Menu from "../src/component/Menu";
import NoteDescription from "./screen/NoteDescription";
import Footer from "./component/Footer";
import SubscribeNow from "./component/SubscribeNow";
function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/all_notes" component={AllNotes} />
        <Route exact path="/note_description" component={NoteDescription} />
      </Switch>
      <SubscribeNow />
      <Footer />
    </Router>
  );
}

export default App;
