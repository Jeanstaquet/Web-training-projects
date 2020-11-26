import React, { useEffect, useState } from 'react';
import "./Playboard.scss";
import Card from "./Card/Card";

function Playboard(props) {
    const [previousCard, setPreviousCard] = useState(0);
    const [count, setCount] = useState(1)
    const [currentCard, setCurrentCard] = useState(0)
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

    let b = 0;
    useEffect(() => {
        b = 0
        console.log(previousCard, currentCard);
        if(previousCard === currentCard) {
            for(let i = 0; i < cards.length; i++) {
                if(Object.values(cards[i])[0] === previousCard) {
                    b = 1
                    const a = [...cards];
                    a[i].turn = true;
                    a[i - 1].turn = true;
                    setCards(a)
                }
            }
        }
    }, [previousCard, currentCard])

    const swipeHandler = (id) => {
        const newState = [...cards];
        newState[id].turn = true;
        if(count === 1) {
            setPreviousCard(() => newState[id].number);
            console.log(newState[id].number)
            setCount(count + 1);
        } else {
            setCurrentCard(newState[id].number);
            setCount(1);
        }

        setCards(newState);
        const timeOutState = [...newState]
        setTimeout(() => {
            if(b !== 1) {
                timeOutState[id].turn = false;
                setCards(timeOutState)
            }

        }, 2000);
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