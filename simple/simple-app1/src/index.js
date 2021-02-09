// if we import bootstrap everything works
// import('./bootstrap');

// if we do the same as in bootstrap here - it doesn't work, also "shared" deps are set to be eager
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(<App />, document.getElementById("root"));