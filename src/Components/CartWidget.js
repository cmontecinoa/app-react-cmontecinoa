import "./CartWidget.css"

const CartWidget = () => {
    return (<div className="cart-container">
        <img className="cart-icon"src="https://res.cloudinary.com/dfzzrobaf/image/upload/v1674372808/SnapbackReactCoder/Pngtree_shopping_cart_convenient_icon_4637407_b2vgjh.png" alt="cart-img"/>
        <p className="cart-counter">N°</p>
    </div>);
};

export default CartWidget;