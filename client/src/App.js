import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router";
import Home from "./components/Home";
import DetailDog from "./components/DetailDog";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />
      <Route exact path="/home" render={() => <NavBar />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/dogs/:id" render={() => <DetailDog />} />
    </div>
  );
}

export default App;
