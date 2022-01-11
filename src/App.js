import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Pizza from "./components/Pizza";
import landingPic from "./landing/picLanding.jpg";

function landingBackgroundPic() {
  return (
    <img src={landingPic} alt="BackgroundPic" id="landingBackground"></img>
  );
}

const Homepage = () => {
  return (
    <div>
      <div className="landing">
        <div className="navBar">
          <h1 className="navLogo">Logo</h1>
          <h2 className="navTile">Homepage</h2>
          <h2 className="navTile">Rólunk</h2>
          <h2 className="navTile">Menü</h2>
        </div>
        <div className="landingBackground">{landingBackgroundPic()}</div>
        <button>
          <Link to="/bookatable">Book a table</Link>
        </button>
      </div>
      <Menu />
      <Pizza />
    </div>
  );
};

const Bookingpage = () => {
  return (
    <div>
      <h1>Booking Page</h1>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};
export { Homepage, Bookingpage };
