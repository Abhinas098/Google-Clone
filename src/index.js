import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { StateProvider } from "./store/StateProvider";
import reducer, { initialState } from "./store/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
