import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useReducerVal } from "./store/StateProvider";
import SearchPage from "./pages/SearchPage";

function App() {
  // const [{ val }] = useReducerVal();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {" "}
            <Home />
          </Route>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
