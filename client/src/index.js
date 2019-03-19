import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import Survey from './components/Questionairre'; not sure is this needs to happen (jessa)

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
