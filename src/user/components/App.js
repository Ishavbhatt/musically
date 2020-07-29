import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import Header from "./Header";
import Signin from "./Signin";
import Home from "./Home";
import Catagaries from "./Catagaries";
import Songs from "./Songs";

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
            <Header />
            <Songs />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
