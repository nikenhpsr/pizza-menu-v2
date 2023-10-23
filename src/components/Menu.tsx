import { pizzaData } from "./Pizza";
import Pizza from "./Pizza";

export default function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        {numPizza > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>

            <ul className="pizzas">
              {pizzas.map((pizzaObj) => (
                <Pizza pizzaObj={pizzaObj} key={pizzaObj.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>Sorry, we're still working on out menu</p>
        )}
      </main>
    </>
  );
}
