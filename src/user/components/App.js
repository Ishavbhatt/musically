import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import Header from "./Header";
import Signin from "./Signin";
import Home from "./Home";
import Catagaries from "./Catagaries";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
    };
  }
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Header />
            <Signin />
          </Route>
          <Route exact path="/catagaries">
            <Header />
            <Catagaries />
          </Route>
          <Route exact path="/songs">
            <h1>Songs</h1>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
