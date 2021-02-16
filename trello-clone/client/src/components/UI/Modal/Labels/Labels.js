import React from 'react';
import "./Labels.css";
import CheckIcon from '@material-ui/icons/Check';
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
        <React.Fragment>
            <p className={!props.sideMenu ? "labelModal" : "labelSideMenu labelModal"} style={{backgroundColor: color}}>{props.type} <span>{props.sideMenu ? <CheckIcon/> : null}</span></p>
            
        </React.Fragment>
        
    );
};

export default Labels;