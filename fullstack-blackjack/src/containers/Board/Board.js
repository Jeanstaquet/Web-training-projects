import React, { useCallback, useEffect, useState } from 'react';
import "./Board.scss"
import Card from "../../components/Card/Card";
import Banner from "../../components/UI/Banner";

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

    const [gameFinished, setGameFinished] = useState(false);


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
        console.log(cardDealer.length)
        let dealerPoint = 0;
        for(let i = 0; i < cardDealer.length; i++) {
            if(!isNaN(cardDealer[i].cardVal)) {
                console.log(dealerPoint)
                dealerPoint += Number(cardDealer[i].cardVal)
            } else if(cardDealer[i].cardVal === "A"){
                dealerPoint += valueAce;
                console.log(dealerPoint)
            } else {
                console.log(dealerPoint)
                dealerPoint += 10
            }
        }
        setDealerPoints(dealerPoint)
        setPlayerPoints(points);
        
        let amount = playerMoney - (playerBet)/2;
        let gains = playerMoney + (Number(playerBet) * 2)
        if(points > 21) {
            setGameFinished(true);
            setPlayerMoney(amount);
            setDealerMoney(Number(dealerMoney) + Number(playerBet))
        } else if(points === 21) {
            setGameFinished(true);
            setDealerMoney(Number(dealerMoney) - Number(playerBet))
            setPlayerMoney(gains);
        }
    }, [cardPlayer, playerPoints, dealerPoints, cardDealer])

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
                setCardDealer([...cardPlayer, 
                                ...cardDistributor(1)]);
            }
        }

    }

    const newGame = () => {
        let arr = [];
        setGameFinished(false)
        setAceAppeard(false);
        setAceClicked(false);
        setValueAce(0);
        setCardPlayer(arr);
        setCardDealer(arr)
        newCardHandler("two", "player");
        newCardHandler("two", "dealer");
    }


    const stopHandler = () => {
        newCardHandler("one", "dealer")
    }

    useEffect(() => {
        playerPointsHandler();
    }, [cardPlayer, playerPointsHandler, cardDealer, dealerPoints, stopHandler])


    let banner = null;
    if(gameFinished) {
        banner = <Banner/>
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
                        <input disabled={!gameFinished} value={playerBet} onChange={(e) => setPlayerBet(e.target.value)} type="number" step="25" placeholder="Insert money" min="0"/>
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