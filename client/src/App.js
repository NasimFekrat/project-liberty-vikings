import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Survey from "./components/Survey";
import Home from "./pages/Home";
// import Navbar from './components/Navbar';
// import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            {/* <Navbar /> */}
          <Switch>
            {/* <Route exact path="/" component={Survey} /> */}
            <Route exact path="/survey" component={Home} />
            {/* <Route path="/homeowners" component={Homeowners} />
            <Route path="/browsehousing" component={Browse} /> */}
            {/* <Route component={ NoResults } /> */}
          </Switch>
          {/* <Footer /> */}
          </div>
        </Router>
    );
  }
}

export default App;
