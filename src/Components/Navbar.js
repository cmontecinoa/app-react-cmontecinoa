import "./Navbar.css";
import CartWidget from "./CartWidget";

function Navbar() {
    return <div className="navbar_container">
        <h3>Bull SB</h3>
        <button className="buttons_navbar">boton 1</button>
        <button className="buttons_navbar">boton 2</button>
        <button className="buttons_navbar">boton 3</button>
        <button className="buttons_navbar">boton 4</button>
        <CartWidget></CartWidget>

    </div>

}

export default Navbar;