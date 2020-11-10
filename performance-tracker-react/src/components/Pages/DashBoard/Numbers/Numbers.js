import React from 'react';
import "./Numbers.scss";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Link, withRouter} from "react-router-dom";


function Numbers(props) {
    
    const data = Object.values(props.data).map((num, index) => {
        return <div key={index} className="number__container"><p>{num.name}</p><span style={{color: num.good ? "green" : "red"}} className="number__amount">{num.number}</span><Link to="/NewActivity">Register a new performance</Link></div>
    })
    return (
        <div className="numbers__container">
            {data}
        </div>
    );
}

export default withRouter(Numbers);