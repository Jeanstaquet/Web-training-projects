import React from 'react';
import "./Labels.css";
const Labels = (props) => {
    let color;
    switch(props.type) {
        case "Urgent":
            color = "red";
            break;
        case "Team IT":
            color = "#f2d600";
            break;
        case "Soon finished":
            color = "#ff9f1a";
            break;
        case "Prioritize":
            color = "#0079bf";
            break;
        case "S.O.S.":
            color = "darkred";
            break;
    }

    return (
        <p className="labelModal" style={{backgroundColor: color}}>{props.type}</p>
    );
};

export default Labels;