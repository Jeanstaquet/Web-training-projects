import React, { useCallback, useEffect, useReducer, useState } from 'react';
import "./Board.scss"
import Card from "../../components/Card/Card";
import Banner from "../../components/UI/Banner";

const initalState = {
    gameFinished: false,
    playerMoney: 1500,
    dealerMoney: 100000,
    message: "",
    playerBet: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case "BET":
            return {
                ...state, playerBet: action.payload
            }
        case "WIN":
            return {
                ...state, gameFinished: true
            }
    }
}

const Board = (props) => {
    const [suits, setSuits] = useState(["spades", "diamonds", "clubs", "hearts"]);
    const [cardValues, setCardValues] = useState(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]);
    const [cardDealer, setCardDealer] = useState([]);
    const [cardPlayer, setCardPlayer] = useState([]);

    const [aceClicked, setAceClicked] = useState(false);
    const [valueAce, setValueAce] = useState(0);
    const [aceAppeard, setAceAppeard] = useState(false)

    const [dealerMoney, setDealerMoney] = useState(1000000);
    const [dealerPoints, setDealerPoints] = useState(0)

    const [playerMoney, setPlayerMoney] = useState(1500);
    const [playerBet, setPlayerBet] = useState(0)
    const [playerPoints, setPlayerPoints] = useState(0);

    const [finished, setFinished] = useState(false)

    const [gameFinished, setGameFinished] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");

    const [state, dispatch] = useReducer(reducer, initalState);



    const gainHandler = (type) => {
        if(type === "win") {
            setGameFinished(true);
            setPlayerMoney(Number(playerMoney) + Number(playerBet)/2);
            setDealerMoney(Number(dealerMoney) - Number(playerBet) *2)
            setDisplayMessage("You win 👍")
        } else if(type === "lost") {
            setGameFinished(true);
            setPlayerMoney(Number(playerMoney) - Number(playerBet)/2);
            setDealerMoney(Number(dealerMoney) + Number(playerBet) *2)
            setDisplayMessage("You lost 👎")
        }
    }


    const cardDistributor = (nbr) => {
        const arr = []
        for(let i = 0; i < nbr; i++) {
            let randomSuits =  suits[Math.floor(Math.random() * suits.length)];
            let randomCardVal = cardValues[Math.floor(Math.random() * cardValues.length)];

            arr.push({cardVal: randomCardVal, suits: randomSuits})
            if(randomCardVal === "A") {
                setAceAppeard(true)
            }   
        }
        return arr
    }


    const aceHandler = (type) => {
        if(type === 11) {
            const points  = playerPoints + 11;
            setPlayerPoints(points);
            setValueAce(11);
            setAceClicked(true)
            setAceAppeard(false)
        } else if(type === 1) {
            const points  = playerPoints + 1;
            setPlayerPoints(points);
            setAceClicked(true);
            setAceAppeard(false);
            setValueAce(1)
        }
    }


    const playerPointsHandler = useCallback(() => {
        let points = 0
        for(let i = 0; i < cardPlayer.length; i++) {
            if(!isNaN(cardPlayer[i].cardVal)) {
                points += Number(cardPlayer[i].cardVal)
            } else if(cardPlayer[i].cardVal === "A"){
                points += valueAce
            } else {
                points += 10
            }
        }
        let dealerPoint = 0;
        for(let i = 0; i < cardDealer.length; i++) {
            if(!isNaN(cardDealer[i].cardVal)) {
                dealerPoint += Number(cardDealer[i].cardVal)
            } else if(cardDealer[i].cardVal === "A"){
                dealerPoint += valueAce;
            } else {
                dealerPoint += 10
            }
        }
        setDealerPoints(dealerPoint)
        setPlayerPoints(points);
        if(points > 21) {
            gainHandler("lost")
            console.log(playerPoints, " >21", points)
        } else if(playerPoints === 21) {
            gainHandler("win")
        } else if(dealerPoint === 21) {
            console.log(dealerPoint)
            gainHandler("lost")
        } else if(dealerPoint > 21) {
            gainHandler("win")
        } else if((dealerPoint > playerPoints) && playerPoints <= 18){
            gainHandler("lost")
        }

    }, [cardPlayer, playerPoints, dealerPoints, cardDealer, finished])

    const newCardHandler = (add, type) => {
        if(type === "player") {
            if(add === "two") {
                setCardPlayer(cardDistributor(2))
            }
    
            if(add === "one") {
                setCardPlayer([...cardPlayer, 
                                ...cardDistributor(1)]);
            }
        } else if(type === "dealer") {
            if(add === "two") {
                setCardDealer(cardDistributor(2))
            }
    
            if(add === "one") {
                setCardDealer([...cardDealer, 
                                ...cardDistributor(1)]);
            }
        }

    }

    const newGame = () => {
        let arr = [];
        setFinished(false)
        setGameFinished(false)
        setAceAppeard(false);
        setAceClicked(false);
        setValueAce(0);
        setCardPlayer(arr);
        setCardDealer(arr)
        newCardHandler("two", "player");
    }


    const stopHandler = () => {
        if (dealerPoints < 10) {
            newCardHandler("one", "dealer");
            if(dealerPoints < 12) {
                newCardHandler("one", "dealer");
            }
        } else if (dealerPoints <= 13) {
            newCardHandler("one", "dealer");
            if(dealerPoints < 15) {
                newCardHandler("one", "dealer");
            }
        } else if(dealerPoints >= 15 && dealerPoints < playerPoints) {
            setFinished(true)
            newCardHandler("one", "dealer")
        } else if(dealerPoints >= 21) {
            setFinished(true)
        }
    }
    
    useEffect(() => {
        playerPointsHandler();
        console.log(playerBet)
    }, [cardPlayer, playerPointsHandler, cardDealer, dealerPoints, stopHandler])


    let banner = null;
    if(gameFinished) {
        banner = <Banner mess={displayMessage} amount={playerBet}/>
    }
    return (
        <div className="board__container">
            <div className="board__game">
                {banner}
                <div className="player__board">
                    <div>
                        <h3>You</h3>
                    <p>💰 Money available: <span className="moneyAvailable">{playerMoney}$</span></p>
                    </div>
                    <div className="card__container">
                        {cardPlayer.map((c, index) => {
                            return <Card
                                aceClicked={aceClicked} 
                                addAce={aceHandler} 
                                key={index} 
                                cardValues={c.cardVal} 
                                suits={c.suits}/>
                        })}
                    </div>
                    <div className="player__button">
                        <h2>Acutal Points: {playerPoints}</h2>
                        <div>
                        <button disabled={gameFinished} onClick={stopHandler}>💲 Stop</button>
                        <label>Amount:</label>
                        <input disabled={!gameFinished} value={state.playerBet} onChange={(e) => dispatch({type: "BET", payload: e.target.value})} type="number" step="25" placeholder="Insert money" min="0"/>
                        <button onClick={() => newCardHandler("one", "player")} disabled={aceAppeard || gameFinished}>Card</button>
                        <button onClick={newGame}>New Game</button>
                        </div>

                    </div>
                </div>
                <div className="dealer__board">
                    <div>
                        <h3>The Dealer</h3>
                        <p>💰 Cash available in the bank: <span className="moneyAvailable">{dealerMoney}$</span></p>
                    </div>
                    <div className="card__container">
                    {cardDealer.map((c, index) => {
                            return <Card
                                aceClicked={aceClicked} 
                                addAce={aceHandler} 
                                key={index} 
                                cardValues={c.cardVal} 
                                suits={c.suits}/>
                        })}
                        </div>
                    <div className="dealer__button">
                        <h2>Actual Points: {dealerPoints}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;