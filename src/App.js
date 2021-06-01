import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./screen/Landing";
import SingleCategory from "./screen/SingleCategory";
import CategoryCard from "./component/CategoryCard";
import AllNotes from "./screen/AllNotes";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          {/* <Route exact path="/all_category"></Route> */}
          <Route exact path="/all_notes">
            <AllNotes />
          </Route>
          <Route exact path="/note_description">
            <SingleCategory />
          </Route>
          <Route exact path="/catagoryCard">
            <CategoryCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
