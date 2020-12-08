import React from 'react';
import "./Card.scss";

function Card(props) {
    let ace = null;
    if(props.cardValues === "A") {
        ace =             
        <div className="ace">
            <button onClick={props.addEleven}>+11</button>
            <button  onClick={props.addOne}>+1</button>
        </div>
    }
    return (
        <div className="card">
            <h4>{props.cardValues}</h4>
            <h4>{props.suits}</h4>
            {ace}
        </div>
    );
}

export default Card;