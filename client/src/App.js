import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router";
import Home from "./components/Home";
import DetailDog from "./components/DetailDog";
import CreateDogs from "./components/CreateDogs";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />
      <Route path="/home" render={() => <NavBar />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/home/detail/:id" render={() => <DetailDog />} />
      <Route exact path="/home/create" render={() => <CreateDogs />} />
    </div>
  );
}

export default App;
