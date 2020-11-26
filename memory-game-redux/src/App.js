import './App.css';
import NavBar from "./components/UI/NavBar/NavBar";
import PlayBoard from "./components/UI/Playboard/Playboard";
function App() {
  return (
    <div className="App">
      <NavBar>
        <PlayBoard/>
      </NavBar>
    </div>
  );
}

export default App;
