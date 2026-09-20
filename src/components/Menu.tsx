import Pizza from "./Pizza";
import "../index.css";



const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



export default function Menu() {

    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return(
        <main className="container">
            <h1 className="menu">Our Menu</h1>

            {numPizzas > 0 ? (
                <>

                <p>Wellcome to fresh Italian pizza resturant where you can eat multiple kind of pizzass</p>
                <ul className="pizzas">
                    {pizzaData.map( ( pizza) => (
                        <Pizza pizzaObj={pizza} key = {pizza.name} />
                    ))}
                </ul>
                </>
            ): <p>We are working on our menu</p>

            }
            {/* <Pizza 
                name = "Focaccia"
                ingredients = "Bread with italian olive oil and rosemary"
                price = "6"
                photoName = "pizzas/focaccia.jpg"
            />
            <Pizza 
                name = "Pizza Margherita"
                ingredients = "Tomato and mozarella"
                price = "6"
                photoName = "pizzas/margherita.jpg"
            /> */}
        </main>
    );
}