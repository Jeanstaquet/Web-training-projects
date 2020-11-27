import './App.css';
import React, {useState, useEffect} from "react"
import NavBar from "./components/UI/NavBar/NavBar";
import PlayBoard from "./components/UI/Playboard/Playboard";
function App() {
  const [currentCard, setCurrentCard] = useState(null);
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
      if(currentCard === nextCard && currentCard !== null && index !== null) {
        const crd = [...cards];
        crd[index].finded = true;
        crd[index + 1].finded = true;
        setCards(crd)
      }
    }, [currentCard, nextCard, index])

  const swipeHandler = (id, index) => {
    if(count === 0) {
      setCurrentCard(id);
      setCounter(1)
    } else {
      setNextCard(id);
      setCounter(0)
    }
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
  <h2 style={{textAlign:"center", width:"100%"}}>{currentCard} ///// {nextCard}</h2>
        <button onClick={() => setCurrentCard(currentCard + 1)}>Push</button>
        <PlayBoard clicked={swipeHandler} cards={cards}/>
      </NavBar>
    </div>
  );
}

export default App;
