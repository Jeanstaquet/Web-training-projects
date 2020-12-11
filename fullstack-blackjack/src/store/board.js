const initalState = {
    gameFinished: false,
    playerMoney: 1500,
    dealerMoney: 100000,
    message: "",
    playerBet: 0,
    aceAppeard: false,
    aceValue: 0,
    aceClicked: false,
    playerPoints: 0,
    dealerPoints: 0,
    finished: false,
    suits: ["spades", "diamonds", "clubs", "hearts"],
    cardValues: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    cardPlayer: [],
    cardDealer: [],
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case "BET":
            return {
                ...state, playerBet: action.payload
            }
        case "NEW_GAME":
            return {
                ...state,
                gameFinished: false,
                aceAppeard: false,
                aceValue: 0,
                aceClicked: false,
                finished: false,
                cardDealer: [],
                cardPlayer: []
            }
        case "WIN":
            return {
                ...state, 
                gameFinished: true, 
                dealerMoney: state.dealerMoney - state.playerBet,
                playerMoney: state.playerBet + state.playerMoney,
                message: "You win 👍"
            }
        case "LOST":
            return {
                ...state,
                gameFinished: true,
                dealerMoney: state.dealerMoney + state.playerBet,
                playerMoney: state.playerMoney - state.playerBet ,
                message: "You lost 👎"
            }
        case "ACE_APPEARED":
            return {
                ...state,
                aceAppeard: true
            }
        case "ACE_VALUE":
            return {
                ...state,
                aceValue: action.payload,
                aceClicked: true
            }
        case "ACE_CLICKED":
            return {
                ...state,
                aceClicked: true
            }
        case "ACE_HANDLER":
            let p = 0
            if(action.payload === 11) {
                return {
                    ...state,
                    aceAppeard: false,
                    aceValue: 11,
                    playerPoints: p,
                    aceClicked: true
                }
            } else {
                return {
                    ...state,
                    aceAppeard: false,
                    aceValue: 1,
                    playerPoints: p,
                    aceClicked: true
                }
            }
        case "PLAYER_POINTS":
            return {
                ...state,
                playerPoints: action.payload
            }
        case "DEALER_POINTS":
            return {
                ...state,
                dealerPoint: action.payload
            }
        case "FINISHED":
            return {
                ...state,
                finished: action.payload
            }
        case "CARD_PLAYER":
            return {
                ...state,
                cardPlayer: [action.payload]
            }
        case "CARD_DEALER":
            return {
                ...state,
                cardDealer: [action.payload]
            }
        case "CARD_DISTRIBUTOR":
            if(action.persona === "player"){
                if(action.number === "one") {
                    return {...state,
                            cardPlayer:[...state.cardPlayer, ...action.newCard]}
                } else if(action.number === "two") {
                    return {
                        ...state,
                        cardPlayer: [...action.newCard]
                    }
                }
            } else if(action.persona === "dealer") {
                if(action.number === "one") {
                    return {
                        ...state,
                        cardDealer: [...state.cardDealer, ...action.newCard]
                    }
                } else if(action.number === "two") {
                    return {
                        ...state,
                        cardDealer: [...action.newCard]
                    }
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;