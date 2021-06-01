import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./screen/Landing";
import SingleCategory from "./screen/SingleCategory";
import CategoryCard from "./component/CategoryCard";

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
        <Route exact path="/catagoryCard">
          <CategoryCard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
