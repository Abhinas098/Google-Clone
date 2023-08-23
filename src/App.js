import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useReducerVal } from "./store/StateProvider";
import SearchPage from "./pages/SearchPage";
import ImagePage from "./pages/ImagePage";

function App() {
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
          <Route path="/images" exact>
            <ImagePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
