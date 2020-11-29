import './App.css';
import React, {useState, useEffect} from "react"
import NavBar from "./components/UI/NavBar/NavBar";
import PlayBoard from "./components/UI/Playboard/Playboard";
import {connect} from "react-redux";
import * as action from "./store/actions/index";
function App(props) {
  const [nextCard, setNextCard] = useState(null);
  const [count, setCounter] = useState(0);
  const [index, setIndex] = useState(null)
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

    useEffect(() => {
      console.log(props.currentCard)
      if(props.currentCard === nextCard && props.currentCard !== null && index !== null) {
        const crd = [...cards];
        crd[index].finded = true;
        crd[index + 1].finded = true;
        setCards(crd)
      }
    }, [index, props.currentCard, nextCard])

  const swipeHandler = (id, index) => {
    if(count === 0) {
      props.currentCardAdd(id);
      setCounter(1)
    } else {
      setNextCard(id);
      setCounter(0)
    }
    setIndex(index);
    const newState = [...cards]
    newState[index].turn = true;
    setCards(newState)
    setTimeout(() => {
      const nS = [...cards];
      nS[index].turn = false;
      setCards(nS)
      }, 2000)
  }


  return (
    <div className="App">
      <NavBar>
  <h2 style={{textAlign:"center", width:"100%"}}>{props.currentCard} ///// {nextCard}</h2>
        <button onClick={() => props.currentCardAdd(props.currentCard + 1)}>Push</button>
        <PlayBoard clicked={swipeHandler} cards={cards}/>
      </NavBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentCard: state.currentCard,
    nextCard: state.nextCard,
    cards: state.cards,
    index: state.index,
    count: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    currentCardAdd: (c) => dispatch(action.currentCardAdd(c)),
    nextCardAdd: () => dispatch(action.nextCardAdd()),
    counterHandler: () => dispatch(action.counterHandler()),
    turnHandler: () => dispatch(action.turnHandler()),
    findedHandler: () => dispatch(action.findedHandler()),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
