import './App.css';
import React, {useState, useEffect} from "react"
import NavBar from "./components/UI/NavBar/NavBar";
import PlayBoard from "./components/UI/Playboard/Playboard";
import {connect} from "react-redux";
import * as action from "./store/actions/index";
function App(props) {

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
      if(props.currentCard === props.nextCard && props.currentCard !== null && index !== null) {
        const crd = [...cards];
        crd[index].finded = true;
        crd[index + 1].finded = true;
        setCards(crd)
      }
    }, [index, props.currentCard, props.nextCard])

  const swipeHandler = (id, index) => {
    if(props.count === 0) {
      props.currentCardAdd(id);
      props.counterHandler(1)
    } else {
      props.nextCardAdd(id);
      props.counterHandler(0)
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
  <h2 style={{textAlign:"center", width:"100%"}}>{props.currentCard} ///// {props.nextCard}</h2>
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
    nextCardAdd: (c) => dispatch(action.nextCardAdd(c)),
    counterHandler: (c) => dispatch(action.counterHandler(c)),
    turnHandler: () => dispatch(action.turnHandler()),
    findedHandler: () => dispatch(action.findedHandler()),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
