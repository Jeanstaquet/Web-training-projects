import React, { useEffect, useState } from 'react';
import "./Playboard.scss";
import Card from "./Card/Card";

function Playboard(props) {
    return (
        <div className="playboard__container">
            {props.cards.map((card, index) => {
                return <Card 
                            number={card.number} 
                            turn={card.turn} 
                            key={index} 
                            click={() => props.clicked(index)}/>
            })}
        </div>
    );
}

export default Playboard;