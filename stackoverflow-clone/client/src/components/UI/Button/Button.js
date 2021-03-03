import React from 'react';
import "./Button.css"
const Button = (props) => {

    return (
        !props.loading ? <button className="btn" disabled={props.disabled} style={{backgroundColor: !props.btnOk ? "green" : "#0095ff"}} onClick={props.onClick}>{props.btnOk ? props.children : "Sent"}</button> 
            : <button className="buttonload btn">
                <i className="fa fa-spinner fa-spin"></i> Loading
              </button>
    );
};

export default Button;