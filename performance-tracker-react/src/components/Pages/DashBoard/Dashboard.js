import React, { useState } from 'react';
import "./Dashboard.scss"
import Numbers from "./Numbers/Numbers"
import Growth from "../../../images/growth.svg";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DoneIcon from '@material-ui/icons/Done';
import TaskToDo from "./Tasks/TasksToDo/TasksToDo"

function Dashboard(props) {
    const [task, setTask] = useState();
    return (
        <div className="dashboard__container">
            <img src={Growth} alt="."/>
            <h2> My Dashboard</h2>
            <Numbers data={props.dataStats.Stats.Activity}/>
            <section className="summary__container">
                <h3>TO DOs for today/this week/this month</h3>
                <form>
                    <label>Add a new task/goal to achieve</label>
                    <div>
                        <input type="text" placeholder="New Task" value={task} onChange={event => setTask(event.target.value)}/>
                        <IconButton onClick={props.add({name: task})}>
                            <AddIcon/>
                        </IconButton>
                    </div>
                </form>
                <div className="dashboard__listContainer">
                    <h3>Tasks to do:</h3>
                    <ul>
                        <TaskToDo data={props.dataStats.TaskToDo}/>
                    </ul>
                </div>
                <div className="dashboard__doneContainer">
                    <h3>Tasks done:</h3>
                    <ul>
                        <li className="dashboard__li">Item<DeleteOutlineIcon className="bin"/></li>
                        <li className="dashboard__li">Item<DeleteOutlineIcon className="bin"/></li>
                        <li className="dashboard__li">Item<DeleteOutlineIcon className="bin"/></li>
                    </ul>
                </div>
            </section>
            <section>
                <p>Graph made with canvajs</p>
            </section>
        </div>
    );
}

export default Dashboard;