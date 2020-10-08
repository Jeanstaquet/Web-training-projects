import React from "react";
import "./Modal.css";

const modal = (props) => {

    return(
        <div style={{
            opacity: props.show ? "1" : "0",
            transform: props.show ? "translateY(0)" : "translateY(-100vh)"
        }} className="modal">
            {props.children}
        </div>
    )
}

export default modal;
