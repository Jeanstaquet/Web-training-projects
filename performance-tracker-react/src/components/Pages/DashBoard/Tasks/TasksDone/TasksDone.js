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
            {data}
        </div>
    );
}

export default TasksDone;