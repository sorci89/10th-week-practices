import React, { useState } from "react";

const date = new Date();
let today;
if (date.getMonth() < 9) {
  today =
    date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
} else {
  today =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [number, setNumber] = useState("");
  const [formSubmitted, submitForm] = useState(false);

  const HourOptions = (props) => {
    const dateFromForm = props.condition;
    let todayHour = new Date().getHours();

    if (dateFromForm === today && todayHour > 8) {
      return (
        <select
          name="time"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          required
        >
          {[...Array(22 - todayHour)].map((_, i) => (
            <option key={i + todayHour + 2} value={i + todayHour + 2}>
              {i + todayHour + 2}:00
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <select
          name="time"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          required
        >
          {[...Array(14)].map((_, i) => (
            <option key={i} value={i + 10}>
              {i + 10}:00
            </option>
          ))}
        </select>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Név: " +
        e.target.text.value +
        "; Email: " +
        e.target.email.value +
        "; Időpont: " +
        e.target.date.value +
        "; " +
        e.target.time.value +
        "; Személyek száma: " +
        e.target.number.value
    );
    submitForm(true);
  };

  return (
    <div className="formDiv">
      {" "}
      {!formSubmitted ? (
        <form className="bookingForm" onSubmit={handleSubmit}>
          <h3>
            Ha asztalt szeretnél foglalni, kérünk töltsd ki az alábbi űrlapot:
          </h3>
          <label>Neved:</label>
          <input
            type="text"
            name="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email címed:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Melyik napra szeretnél foglalni?</label>
          <input
            type="date"
            name="date"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label>Mikor érkeztek?</label>
          <small>Éttermünk minden nap délelőtt 10-től éjfélig van nyitva</small>
          <HourOptions condition={date} />
          <label>Hányan lesztek?</label>
          <input
            type="number"
            name="number"
            min="1"
            max="10"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <input type="submit" value="Foglalási igény elküldése" />
        </form>
      ) : (
        <div className="bookingForm">
          <h3>A foglalást az alábbi adatokkal sikeresen rögzítettük:</h3>
          <p>Név: {name}</p>
          <p>Email cím: {email}</p>
          <p>Személyek száma: {number}</p>
          <p>
            Időpont: {date}, {hour}:00 óra{" "}
          </p>
          <h3>Szeretettel várunk éttermünkben!</h3>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
