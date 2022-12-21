import { Link } from "react-router-dom";

const Item = function ({ foto, marca, modelo, description, precio }) {
    return (
        <li>
            <Link to={`${marca}`}>
                <p>{marca}</p>
            </Link>
            <img src={foto}/>
            <p>{modelo}</p>
            <p>{description}</p>
            <p>{precio}</p>
        </li>
    );
};

export default Item