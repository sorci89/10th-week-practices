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
    </div>
  );
};

export default App;
