import React from 'react';
import "./App.css";

import Board from "./components/Board";
import Card from "./components/Card";


const App = () => {
  return (
    <div>
      <main className="flexbox">
        <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable='true'>
                <p>Card One</p>
              </Card>
        </Board>

        <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable='true'>
                <p>Card Two</p>
              </Card>
        </Board>

        <Board id="board-2" className="board">

        </Board>
      </main>
    </div>
  );
};

export default App;