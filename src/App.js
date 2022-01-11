import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import PizzaList from "./components/PizzaList";
import BookingForm from "./components/Bookingform";

import Navbar from "./components/Navbar";

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
      <div className="intro">
        Szeretettel köszöntjük a Pizza Duo honlapján! Kérjük engedje meg, hogy
        pár mondatban bemutatkozzunk Önnek! Üzletünk 2012 elején nyitott családi
        vállalkozásként. Pizzériánk házhozszállítással foglalkozik, viszont a
        személyes átvételre is van lehetőség a Csaló köz 2 szám alatt. (Volt
        gyógyszertári központ.) Nagyon igyekszünk, hogy mindenki igényét ki
        tudjuk elégíteni, ezért a választékot is úgy próbáljuk kialakítani, hogy
        meglévő és leendő kedves vendégeink is biztosan megtalálják a számukra
        legínycsiklandozóbb pizzát, spagettit, salátát, vagy éppen a városban
        egyedülálló lepényt. Pizzáinkat vékony, közepes és vastag tésztával is
        kérheti. Csak és kizárólag frissen dagasztott tésztával dolgozunk!!!
        Nagyon fontos megemlíteni, hogy számunkra a minőség az első, ami igazán
        baráti árakkal párosul. Vállaljuk iskola és családi rendezvények nagyobb
        mennyiségű színvonalas teljesítését is! Ha felkeltettük érdeklődését,
        látogasson el étlapunkra, ahol a teljes kínálatot megtekintheti, illetve
        elérhetőségeinkről és aktuális akcióinkról is tájékozódhat. Ne feledje
        velünk jól lakhat anélkül, hogy a pénztárcája lefogyna!
      </div>
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
