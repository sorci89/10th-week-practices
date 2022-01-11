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
  


  return (
    <div>
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
    </div>
  );
};

export default App;
