import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from "./App";

let store;

if (process.env.NODE_ENV === "production") {
  store = createStore(rootReducer, applyMiddleware(thunk));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, logger));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
