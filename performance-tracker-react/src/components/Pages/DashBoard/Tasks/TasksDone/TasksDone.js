import React from 'react';
import "./TasksDone.scss";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function TasksDone(props) {

    const data = props.taskDone.map(({id, task}) => {
        return <li 
            key={id} 
            className="dashboard__li done">
            <p>{task.name}</p>
            <DeleteOutlineIcon className="bin" 
            onClick={() => props.delete(id, "done")}/></li>
        })

    return (
        <div>
            {(data.length !== 0) ? data : <h4>Nothing to display, finish a new task...</h4>}
        </div>
    );
}

export default TasksDone;