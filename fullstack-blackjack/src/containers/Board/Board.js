import React, { useCallback, useEffect, useReducer } from 'react';
import "./Board.scss"
import Card from "../../components/Card/Card";
import Banner from "../../components/UI/Banner";
import {connect} from "react-redux"

const Board = (props) => {
    //Reducer state
    const [state, dispatch] = useReducer(reducer, initalState);


    const cardDistributor = useCallback((nbr) => {
        const arr = []
        for(let i = 0; i < nbr; i++) {
            let randomSuits =  state.suits[Math.floor(Math.random() * state.suits.length)];
            let randomCardVal = state.cardValues[Math.floor(Math.random() * state.cardValues.length)];

            arr.push({cardVal: randomCardVal, suits: randomSuits})
            if(randomCardVal === "A") {
                dispatch({type: "ACE_APPEARED"})
            }   
        }
        return arr
    }, [state.suits, state.cardValues])


    const playerPointsHandler = useCallback(() => {
        console.log("player")
        let points = 0
        for(let i = 0; i < state.cardPlayer.length; i++) {
            if(!isNaN(state.cardPlayer[i].cardVal)) {
                points += Number(state.cardPlayer[i].cardVal)
            } else if(state.cardPlayer[i].cardVal === "A"){
                points += state.aceValue
            } else {
                points += 10
            }
        }
        let dealerPoint = 0;
        for(let i = 0; i < state.cardDealer.length; i++) {
            if(!isNaN(state.cardDealer[i].cardVal)) {
                dealerPoint += Number(state.cardDealer[i].cardVal)
            } else if(state.cardDealer[i].cardVal === "A"){
                dealerPoint += state.aceValue;
            } else {
                dealerPoint += 10
            }
        }
        dispatch({type: "DEALER_POINTS", payload: dealerPoint})
        dispatch({type:"PLAYER_POINTS", payload: points})
        if(points > 21) {
            dispatch({type: "LOST"})
        } else if(state.playerPoints === 21) {
            dispatch({type: "WIN"})
        } else if(state.dealerPoints === 21) {
            dispatch({type: "LOST"})
        } else if(state.dealerPoints > 21) {
            dispatch({type: "WIN"})
        } else if((state.dealerPoints > state.playerPoints) && state.playerPoints <= 18){
            dispatch({type: "LOST"})
        }

    }, [state.cardPlayer, state.playerPoints, state.dealerPoints, state.cardDealer, state.aceValue])


    const newGame = () => {
        dispatch({type: "NEW_GAME"})
        dispatch({type: "CARD_DISTRIBUTOR", persona: "player", number: "two", newCard: cardDistributor(2)})
    }


    const stopHandler = useCallback(() => {
        console.log("stop")
        if (state.dealerPoints < 10) {
            dispatch({type: "CARD_DISTRIBUTOR", persona: "dealer", number: "one", newCard: cardDistributor(1)});
            if(state.dealerPoints < 12) {
                dispatch({type: "CARD_DISTRIBUTOR", persona: "dealer", number: "one", newCard: cardDistributor(1)});
            }
        } else if (state.dealerPoints <= 13) {
            dispatch({type: "CARD_DISTRIBUTOR", persona: "dealer", number: "one", newCard: cardDistributor(1)});
            if(state.dealerPoints < 15) {
                dispatch({type: "CARD_DISTRIBUTOR", persona: "dealer", number: "one", newCard: cardDistributor(1)});
            }
        } else if(state.dealerPoints >= 15 && state.dealerPoints < state.playerPoints) {
            dispatch({type: "FINISHED", payload: true})
            dispatch({type: "CARD_DISTRIBUTOR", persona: "dealer", number: "one", newCard: cardDistributor(1)});
        } else if(state.dealerPoints >= 21) {
            dispatch({type: "FINISHED", payload: true})
        }
    }, [state.dealerPoints, state.playerPoints, cardDistributor, state.cardDealer, state.cardPlayer])
    
    useEffect(() => {
        playerPointsHandler();
        console.log("ueffect")
    }, [state.cardPlayer, playerPointsHandler, state.cardDealer, state.dealerPoints, stopHandler])


    let banner = null;
    if(state.gameFinished) {
        banner = <Banner mess={state.message} amount={state.playerBet}/>
    }
    return (
        <div className="board__container">
            <div className="board__game">
                {banner}
                <div className="player__board">
                    <div>
                        <h3>You</h3>
                    <p>💰 Money available: <span className="moneyAvailable">{state.playerMoney}$</span></p>
                    </div>
                    <div className="card__container">
                        {state.cardPlayer.map((c, index) => {
                            return <Card
                                aceClicked={state.aceClicked} 
                                addAce={dispatch({type: "ACE_HANDLER"})}
                                key={index} 
                                cardValues={c.cardVal} 
                                suits={c.suits}/>
                        })}
                    </div>
                    <div className="player__button">
                        <h2>Acutal Points: {state.playerPoints}</h2>
                        <div>
                        <button disabled={state.gameFinished} onClick={() => stopHandler}>💲 Stop</button>
                        <label>Amount:</label>
                        <input disabled={!state.gameFinished} value={state.playerBet} onChange={(e) => dispatch({type: "BET", payload: e.target.value})} type="number" step="25" placeholder="Insert money" min="0"/>
                        <button onClick={() => dispatch({type: "CARD_DISTRIBUTOR", persona: "player", number: "one", newCard: cardDistributor(1)})} disabled={state.aceAppeard || state.gameFinished}>Card</button>
                        <button onClick={() => newGame}>New Game</button>
                        </div>

                    </div>
                </div>
                <div className="dealer__board">
                    <div>
                        <h3>The Dealer</h3>
                        <p>💰 Cash available in the bank: <span className="moneyAvailable">{state.dealerMoney}$</span></p>
                    </div>
                    <div className="card__container">
                    {state.cardDealer.map((c, index) => {
                            return <Card
                                aceClicked={state.aceClicked} 
                                addAce={dispatch({type: "ACE_HANDLER"})} 
                                key={index} 
                                cardValues={c.cardVal} 
                                suits={c.suits}/>
                        })}
                        </div>
                    <div className="dealer__button">
                        <h2>Actual Points: {state.dealerPoints}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;