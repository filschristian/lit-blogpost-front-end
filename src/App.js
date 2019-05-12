import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </div>
    );
  }
}
export default App;
