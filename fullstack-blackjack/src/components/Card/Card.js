import React from 'react';
import "./Card.scss";

function Card(props) {
    return (
        <div className="card">
            <h4>{props.cardValues}</h4>
            <h4>{props.suits}</h4>
        </div>
    );
}

export default Card;