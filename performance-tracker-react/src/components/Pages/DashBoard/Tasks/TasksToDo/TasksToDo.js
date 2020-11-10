import React, {useEffect, useState} from 'react';
import "./TasksToDo.scss";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DoneIcon from '@material-ui/icons/Done';


function TasksToDo(props) {

    const [key, setKey] = useState(Object.keys(props.data));
    useEffect(() => {

    }, [key])
    let data = null 
    if(props.data) {
        data = Object.values(props.data).map((item, index) => {
            return <li key={index} className="dashboard__li achieved"><DoneIcon className="done"/>{item.name}<DeleteOutlineIcon 
            onClick={() => {
                const newArray = [...key]
                newArray.splice(index, 1)
                setKey(newArray)
                props.delete(key[index])
            }} className="bin"/></li>
        })
    }

    
    return (
        <div>
            {data}
        </div>
    );
}

export default TasksToDo;