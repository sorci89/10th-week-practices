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
      <div className="landingPage">
        <Navbar />
        <div className="landingMiddleSection">
          <h1 className="welcomeText">Üdvözöljük a</h1>
          <h1 className="welcomeText">oldalán!</h1>
        </div>
        <div className="btnDiv">
          <button className="btn">
            <span>
              <Link to="/bookatable">Asztalfoglalás</Link>
            </span>
          </button>
        </div>
      </div>

      <Intro />
      <div className="menuSection">{<PizzaList />}</div>
    </div>
  );
};

const Bookingpage = () => {
  return (
    <div>
      <h1>Booking Page</h1>
      <Link to="/">
        <button>Vissza a főoldalra</button>
      </Link>
      <BookingForm />
    </div>
  );
};
export { Homepage, Bookingpage };
