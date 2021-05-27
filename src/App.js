import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./screen/Landing";
import SingleCategory from "./screen/SingleCategory";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/all_category">
          <SingleCategory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
