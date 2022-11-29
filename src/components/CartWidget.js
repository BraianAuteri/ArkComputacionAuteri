import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="cart-container">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon"></FontAwesomeIcon>
            <p className="cart-number">5</p>
        </div>
    );
};


export default CartWidget;