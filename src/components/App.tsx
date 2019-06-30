import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import NavBar from "./common/NavBar";
import PageNotFound from "./PageNotFound";
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;
