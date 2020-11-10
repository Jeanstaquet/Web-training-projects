import React from 'react';
import "./TasksToDo.scss";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DoneIcon from '@material-ui/icons/Done';


function TasksToDo(props) {

    const data = Object.values(props.data).map((item, index) => {
        return <li key={index} className="dashboard__li achieved"><DoneIcon className="done"/>{item}<DeleteOutlineIcon className="bin"/></li>
    })
    
    return (
        <div>
            {data}
        </div>
    );
}

export default TasksToDo;