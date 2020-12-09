import React from 'react';
import "./Card.scss";

function Card(props) {
    let ace = null;
    if(props.cardValues === "A") {
        ace =             
        <div className="ace">
            <button onClick={!props.aceClicked ? () => props.addAce(11) : null}>+11</button>
            <button  onClick={!props.aceClicked ? () => props.addAce(1) : null}>+1</button>
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