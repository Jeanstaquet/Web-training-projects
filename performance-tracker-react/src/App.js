import './App.css';
import NavigationBar from "./components/UI/NavigationBar/NavigationBar";
//import Dashboard from "./components/Pages/DashBoard/Dashboard";
//import MyBestTime from "./components/Pages/MyBestTime/MyBestTime";
import Benchmark from "./components/Pages/Benchmark/Benchmark";
//import NewActivity from "./components/Pages/NewActivity/NewActivity";
function App() {
  return (
    <div className="App">
      <NavigationBar>
        <Benchmark/>
      </NavigationBar>
    </div>
  );
}

export default App;
