import React, { useEffect, useState } from 'react';
import "./Dashboard.scss"
import Numbers from "./Numbers/Numbers"
import Growth from "../../../images/growth.svg";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import TaskToDo from "./Tasks/TasksToDo/TasksToDo";
import TaskDone from "./Tasks/TasksDone/TasksDone";
import Plot from "./Plot/Plot";
import InfoIcon from '@material-ui/icons/Info';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Dashboard(props) {
    const [task, setTask] = useState("");

    let fetchedData = null;
    let fecthedStats = null;

    if(props.newData !== undefined) {
        fetchedData = props.newData
    }

    if(props.Stats !== undefined) {
        fecthedStats = props.Stats
    }

    return (
        <div className="dashboard__container">
            <img src={Growth} alt="."/>
            <h2>🚀 My Dashboard 🚀</h2>
            <Numbers stats={fecthedStats}/>
            <section className="summary__container">
                <h3>🔥TO DOs for today/this week/this month</h3>
                <form>
                    <label>Add a new task/goal to achieve </label>
                    <div>
                        <input type="text" placeholder="Add a new task ..." value={task} onChange={event => setTask(event.target.value)} />
                        <button style={{display: "none"}} type="submit" 
                        onClick={(e) => {
                            setTask("")
                            props.add(task, e)
                            }}></button>
                        <IconButton  
                        onClick={() => {
                            setTask("")
                            props.add(task)
                            }}>
                            <AddIcon/>
                        </IconButton>
                    </div>
                </form>
                <div className="dashboard__listContainer">
                    <h3>Tasks to do:</h3>
                    <ul>
                        <TaskToDo newData={props.newData} delete={props.delete}/>
                    </ul>
                </div>
                <div className="dashboard__doneContainer">
                    <h3>Tasks done:</h3>
                    <ul>
                        <TaskDone taskDone={props.taskDone} delete={props.delete}/>
                    </ul>
                </div>
            </section>
            <section className="graph__container">
                <IconButton>
                <InfoOutlinedIcon className="graph__info"/>
                </IconButton>
                <Plot heigth={250} redraw={true}/> 
            </section>
        </div>
    );
}

export default Dashboard;