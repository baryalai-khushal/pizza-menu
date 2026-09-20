import "../index.css";

export default function Footer () {

    const hour = new Date().getHours();
    const openHours = 8;
    const closeHours = 22;
    const isOpen = hour >=closeHours && hour >= openHours;
    console.log(isOpen);
    return(
        <footer className="footer">
            {isOpen ? (
                <div className="orders">
                    <p>We're open untill {closeHours}:00 please come and visit us or order online.</p>
                    <button className="btn">Order</button>
                </div>
            ): <p>We are close now</p>}
        </footer>
    );
}