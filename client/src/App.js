import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />
      <Route exact path="/home" render={() => <NavBar />} />
      <Route exact path="/home" render={() => <Home />} />
    </div>
  );
}

export default App;
