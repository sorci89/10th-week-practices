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
      {/*<DivFunction />*/}
    </div>
  );
};

export default App;
