import React, { useEffect, useState } from 'react';
import "./Board.scss"
import Card from "../../components/Card/Card";

const Board = (props) => {
    const [suits, setSuits] = useState(["spades", "diamonds", "clubs", "hearts"]);
    const [cardValues, setCardValues] = useState(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]);
    const [cardDealer, setCardDealer] = useState([]);
    const [cardPlayer, setCardPlayer] = useState([]);

    const cardDistributor = (nbr) => {
        const arr = []
        for(let i = 0; i < nbr; i++) {
            let randomSuits =  suits[Math.floor(Math.random() * suits.length)];
            let randomCardVal = cardValues[Math.floor(Math.random() * cardValues.length)];

            arr.push({cardVal: randomCardVal, suits: randomSuits})
        }
        return arr
    }

    const newCardHandler = (add) => {
        if(add === "two") {
            setCardPlayer(cardDistributor(2))
        }

        if(add === "one") {
            setCardPlayer([...cardPlayer, 
                            ...cardDistributor(1)])
        }
    }

    const newGame = () => {
        let arr = []
        setCardPlayer(arr)
        newCardHandler("two")
    }

    return (
        <div className="board__container">
            <div className="board__game">
                <div className="player__board">
                    <div>
                        <h3>You</h3>
                        <p>💰 Money available: <span className="moneyAvailable">1500$</span></p>
                    </div>
                    <div className="card__container">
                        {cardPlayer.map((c, index) => {
                            return <Card key={index} cardValues={c.cardVal} suits={c.suits}/>
                        })}
                    </div>
                    <div className="player__button">
                        <h2>Acutal Points: XX</h2>
                        <div>
                        <button>💲 Bet</button>
                        <label>Amount:</label>
                        <input type="number" step="25" placeholder="Insert money" min="0"/>
                        <button onClick={() => newCardHandler("one")}>Card</button>
                        <button onClick={newGame}>New Game</button>
                        </div>

                    </div>
                </div>
                <div className="dealer__board">
                    <div>
                        <h3>The Dealer</h3>
                        <p>💰 Cash available in the bank: <span className="moneyAvailable">1M$</span></p>
                    </div>
                    <div className="card__container">
                    {cardDealer.map((c, index) => {
                            return <Card key={index} cardValues={c.cardVal} suits={c.suits}/>
                        })}
                        </div>
                    <div className="dealer__button">
                        <h2>Actual Points: XX</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;