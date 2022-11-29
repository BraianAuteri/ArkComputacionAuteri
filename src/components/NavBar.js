import "./Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h2>Ark Computación</h2>
            <button className="buttons-navbar">Inicio</button>
            <button className="buttons-navbar">Notebooks</button>
            <button className="buttons-navbar">Periféricos</button>
            <CartWidget />
        </div>
    );
};

export default Navbar;