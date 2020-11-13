import './App.css';
import NavigationBar from "./components/UI/NavigationBar/NavigationBar";
import Dashboard from "./components/Pages/DashBoard/Dashboard";
import MyBestTime from "./components/Pages/MyBestTime/MyBestTime";
import Benchmark from "./components/Pages/Benchmark/Benchmark";
import NewActivity from "./components/Pages/NewActivity/NewActivity";
import {Route, Switch} from "react-router-dom";
import {useEffect, useState } from 'react';
import {db} from "./firebase";
import firebase from "firebase";
import axios from "./axios"

function App() {
  const [data, setData] = useState();
  const [newData, setNewData] = useState([])
  const [reload, setReload] = useState([]);

  useEffect(() => {
    axios.get("Jean.json")
      .then(res => {
        return res.data
      })
      .then(resp => {
        setData(resp);
      })
  }, []);

  useEffect(() => {
    db        
      .collection("Tasks")
      .onSnapshot(snapshot => {
        setNewData(snapshot.docs.map(doc => ({
          id: doc.id,
          task: doc.data()
        })))
      })

  }, [])

  const addNewTask = (task) => {
      db.collection("Tasks").add({
        timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
        name: task,
        done: false
      });
  } 

  useEffect(() => {
    deleteNewTask();
    console.log(newData[1].id)
  }, [])

  const deleteNewTask = () => {
    //à terminer
    db.collection("Tasks").doc("igYVgx3fuzcsLVLLbn7b").delete()
  }

  const deleteTask = (postId) => {
    axios.delete(`Jean/TaskToDo/${postId}.json`)
      .then(resp => console.log(resp.data))
      .then(setReload([...reload, "ok"]))
  }

  let display = null;
  if(data) {
    display= <Dashboard dataStats={data} add={addNewTask} delete={deleteTask}/>
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
