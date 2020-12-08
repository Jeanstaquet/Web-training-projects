import React, { useState } from 'react';
import "./Board.scss"
import Card from "../../components/Card/Card";

const Board = (props) => {
    const [suits, setSuits] = useState(["spades", "diamonds", "clubs", "hearts"]);
    const [cardValues, setCardValues] = useState(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"])

    return (
        <div className="board__container">
            <div className="board__game">
                <div className="player__board">
                    <div>
                        <h3>You</h3>
                        <p>💰 Money available: <span className="moneyAvailable">1500$</span></p>
                    </div>
                    <div className="card__container">
                        <Card/>
                    </div>
                    <div className="player__button">
                        <h2>Acutal Points: XX</h2>
                        <div>
                        <button>💲 Bet</button>
                        <label>Amount:</label>
                        <input type="number" step="25" placeholder="Insert money"/>
                        <button>Stop</button>
                        <button>New Game</button>
                        </div>

                    </div>
                </div>
                <div className="dealer__board">
                    <div>
                        <h3>The Dealer</h3>
                        <p>💰 Cash available in the bank: <span className="moneyAvailable">1M$</span></p>
                    </div>
                    <div className="card__container">
                        
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