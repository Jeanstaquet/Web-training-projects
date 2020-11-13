import React, {useEffect, useState} from 'react';
import "./TasksToDo.scss";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DoneIcon from '@material-ui/icons/Done';
import {db} from "../../../../../firebase";
import firebase from "firebase"


function TasksToDo(props) {
    
    const taskFinish = (id, taskName) => {
        db.collection("Tasks").doc(id).delete();
        db.collection("TasksDone").add({
          timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
          name: taskName,
          done: true
        })
    }

    const data = props.newData.map(({id, task}) => {
        return <li 
            key={id} 
            className="dashboard__li achieved">
            <DoneIcon className="done" onClick={() => taskFinish(id, "test")}/>
            <p>{task.name}</p>
            <DeleteOutlineIcon className="bin" 
            onClick={() => props.delete(id, "notdone")}/></li>
        })

    
    return (
        <div>
            {data}
        </div>
    );
}

export default TasksToDo;

// onClick={() => {
//     props.delete(id)
// }}