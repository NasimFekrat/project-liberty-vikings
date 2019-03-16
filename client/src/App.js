import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Survey from "./components/Survey";


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">Housing Search</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
          </form>
        </nav>

        {/* change to carousel of available apartments? */}
        <div class="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>

        {/* MAIN CONTENT */}
        <Router>
          <Switch>
            <Route path="/survey" component={Survey} />
            {/* <Route path="/homeowners" component={Homeowners} />
            <Route path="/browsehousing" component={Browse} /> */}
            {/* <Route component={ NoResults } /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
