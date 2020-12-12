import React, { useCallback, useEffect } from 'react';
import "./Board.scss"
import Card from "../../components/Card/Card";
import Banner from "../../components/UI/Banner";
import {connect, batch} from "react-redux"

const Board = (props) => {

    const cardDistributor = (nbr) => {
        const arr = []
        for(let i = 0; i < nbr; i++) {
            let randomSuits =  props.suits[Math.floor(Math.random() * props.suits.length)];
            let randomCardVal = props.cardValues[Math.floor(Math.random() * props.cardValues.length)];

            arr.push({cardVal: randomCardVal, suits: randomSuits})
            if(randomCardVal === "A") {
                props.aceAppeardHandler()
            }   
        }
        return arr
    }


    const playerPointsHandler = () => {
        console.log("player")
        let points = 0
        for(let i = 0; i < props.cardPlayer.length; i++) {
            if(!isNaN(props.cardPlayer[i].cardVal)) {
                points += Number(props.cardPlayer[i].cardVal)
            } else if(props.cardPlayer[i].cardVal === "A"){
                points += props.aceValue
            } else {
                points += 10
            }
        }
        let dealerPoint = 0;
        for(let i = 0; i < props.cardDealer.length; i++) {
            if(!isNaN(props.cardDealer[i].cardVal)) {
                dealerPoint += Number(props.cardDealer[i].cardVal)
            } else if(props.cardDealer[i].cardVal === "A"){
                dealerPoint += props.aceValue;
            } else {
                dealerPoint += 10
            }
        }
        console.log(props.dealerPoints)
        batch(() => {
            props.dealerPointsHandler(dealerPoint)
            props.playerPointsHandler(points)
        })

        if(points > 21) {
            props.lost()
        } else if(points === 21) {
            props.win()
        } else if(dealerPoint === 21) {
            props.lost()
        } else if(dealerPoint > 21) {
            props.win()
        } else if((dealerPoint > points) && points <= 18){
            props.lost()
        }

    }


    const newGame = () => {
        props.newGame()
        props.cardDHandler("player", "two", cardDistributor(2))
    }


    const stopHandler = () => {
        console.log("stop")
        if (props.dealerPoints < 10) {
            props.cardDHandler("dealer", "one", cardDistributor(1))
            if(props.dealerPoints < 12) {
                props.cardDHandler("dealer", "one", cardDistributor(1))
            }
        } else if (props.dealerPoints <= 13) {
            props.cardDHandler("dealer", "one", cardDistributor(1))
            if(props.dealerPoints < 15) {
                props.cardDHandler("dealer", "one", cardDistributor(1))
            }
        } else if(props.dealerPoints >= 15 && props.dealerPoints < props.playerPoints) {
            props.finishedHandler(true)
            props.cardDHandler("dealer", "one", cardDistributor(1))
        } else if(props.dealerPoints >= 21) {
            props.finishedHandler(true)
        }
    }
    
    useEffect(() => {
        playerPointsHandler();
        console.log("ueffect")
    }, [props.cardPlayer, playerPointsHandler, props.cardDealer, props.dealerPoints, props.gameFinished])


    let banner = null;
    if(props.gameFinished) {
        banner = <Banner mess={props.message} amount={props.playerBet}/>
    }
    return (
        <div className="board__container">
            <div className="board__game">
                {banner}
                <div className="player__board">
                    <div>
                        <h3>You</h3>
                    <p>💰 Money available: <span className="moneyAvailable">{props.playerMoney}$</span></p>
                    </div>
                    <div className="card__container">
                        {props.cardPlayer.map((c, index) => {
                            return <Card
                                aceClicked={props.aceClicked} 
                                addAce={() => props.aceHandler(11)}
                                key={index} 
                                cardValues={c.cardVal} 
                                suits={c.suits}/>
                        })}
                    </div>
                    <div className="player__button">
                        <h2>Acutal Points: {props.playerPoints}</h2>
                        <div>
                        <button disabled={props.gameFinished} onClick={() => stopHandler()}>💲 Stop</button>
                        <label>Amount:</label>
                        <input disabled={!props.gameFinished} value={props.playerBet} onChange={(e) => props.bet(e.target.value)} type="number" step="25" placeholder="Insert money" min="0"/>
                        <button onClick={() => props.cardDHandler("player", "one", cardDistributor(1))} disabled={props.aceAppeard || props.gameFinished}>Card</button>
                        <button onClick={() => newGame()}>New Game</button>
                        </div>

                    </div>
                </div>
                <div className="dealer__board">
                    <div>
                        <h3>The Dealer</h3>
                        <p>💰 Cash available in the bank: <span className="moneyAvailable">{props.dealerMoney}$</span></p>
                    </div>
                    <div className="card__container">
                    {props.cardDealer.map((c, index) => {
                            return <Card
                                aceClicked={props.aceClicked} 
                                addAce={() => props.aceHandler(11)} 
                                key={index} 
                                cardValues={c.cardVal} 
                                suits={c.suits}/>
                        })}
                        </div>
                    <div className="dealer__button">
                        <h2>Actual Points: {props.dealerPoints}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        gameFinished: state.board.gameFinished,
        playerMoney: state.board.playerMoney,
        dealerMoney: state.board.dealerMoney,
        message: state.board.message,
        playerBet: state.board.playerBet,
        aceAppeard: state.board.aceAppeard,
        aceValue: state.board.aceValue,
        aceClicked: state.board.aceClicked,
        playerPoints: state.board.playerPoints,
        dealerPoints: state.board.dealerPoints,
        finished: state.board.finished,
        suits: state.board.suits,
        cardValues: state.board.cardValues,
        cardPlayer: state.board.cardPlayer,
        cardDealer: state.board.cardDealer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bet: (p) => dispatch({type: "BET", payload: p}),
        newGame: () => dispatch({type: "NEW_GAME"}),
        win: () => dispatch({type: "WIN"}),
        lost: () => dispatch({type: "LOST"}),
        aceAppeardHandler: () => dispatch({type: "ACE_APPEARED"}),
        aceValueHandler: (d) => dispatch({type: "ACE_VALUE", payload: d}),
        aceClickedHandler: () => dispatch({type: "ACE_CLICKED"}),
        aceHandler: (p) => dispatch({type: "ACE_HANDLER", payload: p}),
        playerPointsHandler: (p) => dispatch({type: "PLAYER_POINTS", payload: p}),
        dealerPointsHandler: (p) => dispatch({type: "DEALER_POINTS", payload: p}),
        finishedHandler: (p) => dispatch({type: "FINISHED", payload: p}),
        cardPlayerHandler: (p) => dispatch({type: "CARD_PLAYER", payload: p}),
        cardDealerHandler: (p) => dispatch({type: "CARD_DEALER", payload: p}),
        cardDHandler: (p, n, nC) => dispatch({type: "CARD_DISTRIBUTOR", persona: p, number: n, newCard: nC}),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Board);