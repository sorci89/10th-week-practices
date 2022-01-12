import { useState } from "react";

let isHomePage = true;

const homePage = ()=> {
  console.log(isHomePage)
  isHomePage = !isHomePage;
  console.log(isHomePage)
} 

/*const DivFunction = () => {
  if (isHomePage) {
    return <div>Home Page</div>
  } else {
    return <div>Landing Page</div>
  }
}
*/


const App = () => {
  //let isLandingPage = true;
  
  let [isLandingPage, setter] = useState(true);
  
  const toggleDisplay = () => {
    setter(!isLandingPage)
  }

  let [pageName, setPageName] = useState("Home");
  

  const inputValue = "Ez az érték"

  let [inputValue2, setInputValue2] = useState("")
  console.log(inputValue2)
  //console.log(typeof inputValue2)

  const cars = [
    {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
    {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
    {brand: "Mazda", model: "6", topSpeed: "210km/h"},
    {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
    {brand: "Audi", model: "A4", topSpeed: "220km/h"},
  ]
 
  // const transformToDiv = (carObject) => <div>{carObject.brand} - {carObject.model} ({carObject.topSpeed})</div>
  

  
  return (
    <div className="App">
        Hello
      <div>{
        isHomePage ? 
        <div>Home Page</div> : 
        <div>Landing Page</div>
      }
      </div>
      <button onClick={homePage}>Click me!</button>
      <div>{
        isLandingPage ? 
        <div>Home Page</div> : 
        <div>Landing Page</div>
      }
      </div>
      <button onClick={toggleDisplay}>Click me!</button>
      {/*<DivFunction />*/}
      <div>
        <button onClick={()=> setPageName ("Home")}>Home</button>
        <button onClick={()=> setPageName ("About")}>About</button>
        <button onClick={()=> setPageName ("Landing")}>Landing</button>
      
        {pageName === "Home" && <div>Content of Home Page</div>}
        {pageName === "About" && <div><h1>Content of About</h1></div>}
        {pageName === "Landing" && <div><input type="text"></input></div>}
      </div>
      <hr />

      <input type="text" value={inputValue}></input>
      <input type="text" name="submit" onChange={(event)=> setInputValue2(event.target.value)}></input>
      {/* {inputValue2.length >= 3 ? <button>Submit</button> : <button disabled>Submit</button>} */}
      <button disabled={inputValue2.length < 3}>Submit</button>
      {inputValue2.length < 3 && <p>Min 3 char!</p>}
      <hr />
      {/* {cars.map(car => <div>{car.brand} - {car.model} ({car.topSpeed})</div>)} */}
      {cars.filter(car => car.brand.slice(0, inputValue2.length) === inputValue2).map(car => <div>{car.brand} - {car.model} ({car.topSpeed})</div>)}
      {/* {cars.filter(car => car.brand.startsWith(inputValue2)).map((car, index) => <div key={index}>{car.brand} - {car.model} ({car.topSpeed})</div>)} */}
      {/* <ul>{cars.map((element, index)=> (<li key={index}>{element.brand} {element.model} {element.topSpeed}</li>))}</ul> */}
    </div>
  );
};

export default App;
