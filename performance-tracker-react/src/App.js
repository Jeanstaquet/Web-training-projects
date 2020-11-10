import './App.css';
import NavigationBar from "./components/UI/NavigationBar/NavigationBar";
import Dashboard from "./components/Pages/DashBoard/Dashboard";
import MyBestTime from "./components/Pages/MyBestTime/MyBestTime";
import Benchmark from "./components/Pages/Benchmark/Benchmark";
import NewActivity from "./components/Pages/NewActivity/NewActivity";
import {Route, Switch} from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import axios from "./axios"

function App() {
  const [data, setData] = useState();
  const [reload, setReload] = useState([])

  useEffect(() => {
    axios.get("Jean.json")
      .then(res => {
        return res.data
      })
      .then(resp => {
        setData(resp);
      })
  }, []);

  useEffect(() => console.log(reload))

  const addTask = (item) => {
    axios.post("Jean/TaskToDo.json", item)
      .then(resp => setReload(([...reload, "ok"])))
  }

  const deleteTask = (postId) => {
    axios.delete(`Jean/TaskToDo/${postId}.json`)
      .then(resp => console.log(resp.data))
      .then(setReload([...reload, "ok"]))
  }

  let display = null;
  if(data) {
    display= <Dashboard dataStats={data} add={addTask} delete={deleteTask}/>
  }
  return (
    <div className="App">
      <NavigationBar>
        <Switch>
          <Route path="/" exact>{display}</Route>
          <Route path="/MyBestTime" exact component={MyBestTime}/>
          <Route path="/Benchmark" exact component={Benchmark}/>
          <Route path="/NewActivity" exact component={NewActivity}/>
        </Switch>
      </NavigationBar>
    </div>
  );
}

export default App;
