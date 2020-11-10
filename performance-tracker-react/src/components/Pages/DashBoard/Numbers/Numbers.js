import React, { useEffect, useState } from 'react';
import "./Numbers.scss";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Link, withRouter} from "react-router-dom";


function Numbers(props) {
    const [stats, setStats] = useState([{name: "Time worked", number: "45h", good: true},
                                       {name: "Activity achieved", number: "12", good: true},
                                       {name: "# Ranking", number: "#11452", good: false},
                                       {name: "Next level:", number: "55xp/65xp", good: true}])

    const data = stats.map((num, index) => {
        return <div key={index} className="number__container"><p>{num.name}</p><span style={{color: num.good ? "green" : "red"}} className="number__amount">{num.number}</span><Link to="/NewActivity">Register a new performance</Link></div>
    })
    return (
        <div className="numbers__container">
            {data}
        </div>
    );
}

export default withRouter(Numbers);