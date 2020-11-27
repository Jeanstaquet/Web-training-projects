import './App.css';
import React, {useState, useEffect} from "react"
import NavBar from "./components/UI/NavBar/NavBar";
import PlayBoard from "./components/UI/Playboard/Playboard";
function App() {
  const [currentCard, setCurrentCard] = useState("");
  const [nextCard, setNextCard] = useState("");
  const [find, setFind] = useState(false)
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
      if(currentCard === nextCard) {
        setCards([...cards, cards[0].number = currentCard])
      }
      console.log(cards[0].number)
    }, [currentCard, nextCard])

  const swipeHandler = (id) => {
    setCurrentCard(id);
    setNextCard(id)
    console.log(currentCard)
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
