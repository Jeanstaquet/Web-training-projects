import React from "react";
import "./Order.scss"

const order = () => (
    <div className="order-container">
        <h2>Product(s) name(s):</h2>
        <p>Total Price: </p>
        <p>Size(s): </p>
        <span className="Remove">x</span>
    </div>
);

export default order;