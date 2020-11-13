import React from 'react';
import "./Numbers.scss";
import {Link, withRouter} from "react-router-dom";


function Numbers(props) {
    let newData = null;
    if(props.stats === undefined || props.stats.length === 0) {
        //nothing  
    } else {
        newData = props.stats.map(({id, task}) => {

            return  <div key={id} className="number__container"><p>{task.name}</p><span style={{color: task.good ? "green" : "red"}} className="number__amount">{task.number}</span><Link to="/NewActivity">Register a new performance</Link></div>
        })
    }
    return (
        <div className="numbers__container">
            {newData}
        </div>
    );
}

export default withRouter(Numbers);