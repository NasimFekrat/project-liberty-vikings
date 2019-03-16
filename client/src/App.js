import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Login from "./pages/Login";
import Survey from "./pages/Survey";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/survey" component={Survey} />
            <Route exact path="/home" component={Home} />
            {/* <Route component={ NoResults } /> */}
          </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
