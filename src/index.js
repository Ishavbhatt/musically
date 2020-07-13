import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import User from "./user/components/App";
import Home from "./user/components/Home";
import store from "./state/store";

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Route exact path="/">
      <Home />
    </Route>
  );
}

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <User />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
