import './App.css';
import React, {useState, useEffect} from "react"
import NavBar from "./components/UI/NavBar/NavBar";
import PlayBoard from "./components/UI/Playboard/Playboard";
import {connect} from "react-redux";
import * as action from "./store/actions/index";
function App(props) {
    useEffect(() => {
      console.log(props.currentCard)
      if(props.currentCard === props.nextCard && props.currentCard !== null && props.index !== null) {
        props.findedHandler(props.index)
      }
    }, [props.index, props.currentCard, props.nextCard])

  const swipeHandler = (id, index) => {
    if(props.count === 0) {
      props.currentCardAdd(id);
      props.counterHandler(1)
    } else {
      props.nextCardAdd(id);
      props.counterHandler(0)
    }
    props.indexAdd(index)
    props.turnHandler(index, true)
    
    setTimeout(() => {
      props.turnHandler(index, false)
      }, 2000)
  }


  return (
    <div className="App">
      <NavBar>
  <h2 style={{textAlign:"center", width:"100%"}}>{props.currentCard} ///// {props.nextCard}</h2>
        <button onClick={() => props.currentCardAdd(props.currentCard + 1)}>Push</button>
        <PlayBoard clicked={swipeHandler} cards={props.cards}/>
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
    count: state.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    currentCardAdd: (c) => dispatch(action.currentCardAdd(c)),
    nextCardAdd: (c) => dispatch(action.nextCardAdd(c)),
    counterHandler: (c) => dispatch(action.counterHandler(c)),
    turnHandler: (i, b) => dispatch(action.turnHandler(i, b)),
    findedHandler: (i) => dispatch(action.findedHandler(i)),
    indexAdd: (i) => dispatch(action.indexAdd(i))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
