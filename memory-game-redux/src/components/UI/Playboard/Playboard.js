import React, { useState } from 'react';
import "./Playboard.scss";
import Card from "./Card/Card";

function Playboard(props) {
    const [shouldTurn, setShouldturn] = useState(false)
    const [cards, setCards] = useState(
            [{number: 1, turn: false, finded: false},
            {number: 1, turn: false, finded: false},
            {number: 2, turn: false, finded: false},
            {number: 2, turn: false, finded: false},
            {number: 3, turn: false, finded: false},
            {number: 3, turn: false, finded: false},
            {number: 4, turn: false, finded: false},
            {number: 4, turn: false, finded: false},
            {number: 5, turn: false, finded: false},
            {number: 5, turn: false, finded: false},
            {number: 6, turn: false, finded: false},
            {number: 6, turn: false, finded: false},
            {number: 7, turn: false, finded: false},
            {number: 7, turn: false, finded: false},
            {number: 8, turn: false, finded: false},
            {number: 8, turn: false, finded: false},
            {number: 9, turn: false, finded: false},
            {number: 9, turn: false, finded: false}]
            )
    
    const swipeHandler = (id) => {
        console.log('ok');
        const newState = [...cards];
        newState[id].turn = true;
        setCards(newState)
    }

    return (
        <div className="playboard__container">
            {cards.map((card, index) => {
                return <Card 
                            number={card.number} 
                            turn={card.turn} 
                            key={index} 
                            click={() => swipeHandler(index)}/>
            })}
        </div>
    );
}

export default Playboard;