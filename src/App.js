import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import PizzaList from "./components/PizzaList";
import BookingForm from "./components/Bookingform";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Homepage = () => {
  return (
    <div>
      <div className="landingPage" id="mainPage">
        <Navbar />
        <div className="landingMiddleSection">
          <h1 className="welcomeText">Üdvözöljük a</h1>
          <h1 className="welcomeText">Team 4 Pizzéria</h1>
          <h1 className="welcomeText">oldalán!</h1>
        </div>
        <div className="btnDiv">
          <Link to="/bookatable">
            <button className="btn">
              <span>Asztalfoglalás</span>
            </button>
          </Link>
        </div>
      </div>

      <Intro />
      <div className="menuSection" id="Menü">
        {<PizzaList />}
      </div>
    </div>
  );
};

const Bookingpage = () => {
  return (
    <div className="formPageDiv">
      <Navbar />
      <div className="bookingMiddleSection">
        <BookingForm />
        <Link to="/">
          <button className="btn">
            <span>Vissza a főoldalra</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export { Homepage, Bookingpage };
