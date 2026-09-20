

interface PizzaType {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
}

interface PizzaProps {
    pizzaObj: PizzaType;
}

export default function Pizza (props: PizzaProps) {
    console.log(props);
    return(
        <li className={`pizza ${props.pizzaObj.soldOut?"sold-out":""}`}>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h1>{props.pizzaObj.name}</h1>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.soldOut ? "Sold Out":props.pizzaObj.price}</span>
            </div>

        </li>
    )
}   