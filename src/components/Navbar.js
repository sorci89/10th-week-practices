import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar">
      <div className="navName">
        <a href="#mainPage">
          <h1>Team 4 Pizzéria</h1>
        </a>
      </div>

      <div className="navTile">
        <a href="#Rólunk">
          <h2>Rólunk</h2>
        </a>
      </div>
      <div className="navTile">
        <a href="#Menü">
          <h2>Menü</h2>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
