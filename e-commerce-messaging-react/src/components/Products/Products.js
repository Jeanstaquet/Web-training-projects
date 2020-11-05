import React from 'react';
import "./Products.scss";
const products = (props) => {

    return (
        <div className="products">
            <p>{props.name}</p>
        <h3 style={{color: props.good ? "green" : "red"}}>{props.good ? "+" : "-"}{props.data} </h3>
        <a href="/">{props.name}</a>
        </div>
    );
};

export default products;