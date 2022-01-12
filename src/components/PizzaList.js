import { pizza } from "./Pizza.js";

function PizzaList() {
  const pizzaBoxes = pizza.map((e) => {
    let Toppings = " ";
    Toppings += e.topping.map((element) => {
      return " " + element;
    });
    return (
      <div className="pizzaBox" key={e.id}>
        <img src={e.picture} alt={e.name} />
        <h1 className="pizzaName">{e.name}</h1>
        <p className="pizzaDescription">
          <span>Feltét:</span>
          {Toppings}{" "}
        </p>
        <p className="pizzaPrice">
          <span>Ár:</span> {e.price} Ft.
        </p>
      </div>
    );
  });

  let content = <div className="pizzaList">{pizzaBoxes}</div>;

  return content;
}

export default PizzaList;
