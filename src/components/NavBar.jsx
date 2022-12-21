import "./Navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            
            <h2>Ark Computación</h2>
            <Link to="/">
                <button className="buttons-navbar">Inicio</button>
            </Link>
            <Link to="/notebooks">
            <button className="buttons-navbar">Notebooks</button>
            </Link>
            <Link to="/perifericos">
            <button className="buttons-navbar">Periféricos</button>
            </Link>
            <CartWidget />
        </div>
    );
};

export default Navbar;