import React from 'react';
import "./Products.scss";
import {Link, withRouter} from "react-router-dom";
const products = (props) => {
    return (
        <div className="products">
            <p>{props.name}</p>
        <h3 style={{color: props.good ? "green" : "red"}}>{props.good ? "+" : "-"}{props.data} </h3>
        <Link to={`/${props.name}`}>{props.name}</Link>
        </div>
    );
};

export default withRouter(products);