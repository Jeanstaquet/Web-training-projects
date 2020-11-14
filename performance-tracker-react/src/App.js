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

function App() {
  const [data, setData] = useState();
  const [newData, setNewData] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const [stats, setStats] = useState([]);

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

  useEffect(() => {
    db        
      .collection("Activity")
      .onSnapshot(snapshot => {
        setStats(snapshot.docs.map(doc => ({
          id: doc.id,
          task: doc.data()
        })))
      })

  }, [])

  useEffect(() => {
    db        
      .collection("TasksDone")
      .onSnapshot(snapshot => {
        setTaskDone(snapshot.docs.map(doc => ({
          id: doc.id,
          task: doc.data()
        })))
      })

  }, [])


  const addNewTask = (task, event) => {
      if(event) {
        event.preventDefault();
      }
  
      db.collection("Tasks").add({
        timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
        name: task,
        done: false
      });
  } 

  const deleteNewTask = (id, status) => {
    if(status === "notdone") {
      db.collection("Tasks").doc(id).delete()
    } else if(status === "done") {
      db.collection("TasksDone").doc(id).delete()
    }
    
  }


  let display = <h1>Error</h1>
  if(newData) {
    display= <Dashboard 
                  dataStats={data} 
                  Stats={stats}
                  add={addNewTask} 
                  delete={deleteNewTask} 
                  newData={newData}
                  taskDone={taskDone}/>
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
