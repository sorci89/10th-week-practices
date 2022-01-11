import React, {useState} from 'react';

const BookingForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [number, setNumber] = useState('');
  const [formSubmitted, submitForm] = useState(false);
  let today;

  const getToday = () => {
    today = new Date();
    console.log(today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate());
    return today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Név: " + e.target.text.value + "; Email: " + e.target.email.value + "; Időpont: " + e.target.date.value + "; " + e.target.time.value + "; Személyek száma: " + e.target.number.value);
    submitForm(true);
  }

  return (
    <div> {
      !formSubmitted ? 
      <form className="bookingForm" onSubmit={handleSubmit}>
        <label>Neved:</label>
        <input type="text" name="text" value={name} onChange={e => setName(e.target.value)} />
        <label>Email címed:</label>
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Melyik napra szeretnél foglalni?</label>
        <input type="date" name ="date" min={getToday()} value={date} onChange={e => setDate(e.target.value)} />
        <label>Mikor érkeztek?</label>
        <input type="time" name="time" min="10:00" value={hour} onChange={e => setHour(e.target.value)} />
        <label>Hányan lesztek?</label>
        <input type="number" name="number" min="1" max="10" value={number} onChange={e => setNumber(e.target.value)} />
        <input type="submit" value="Foglalási igény elküldése" />
      </form>
      :
      <div className="bookingForm">
        <h3>A foglalást az alábbi adatokkal sikeresen rögzítettük:</h3>
        <p>Név: {name}</p>
        <p>Email cím: {email}</p>
        <p>Személyek száma: {number}</p>
        <p>Időpont: {date}, {hour} óra </p>
        <h3>Szeretettel várunk éttermünkben!</h3>
      </div>
      }
    </div>
  );
}

export default BookingForm;