import React from "react";
import "./Modal.css";

const modal = (props) => {
    return (
        <div className="modal" style={{transform: props.show ? "translateY(0)" : "translateY(-100vh)"}} onClick={props.open}>
            {props.children}
        </div>
    )

}

export default modal;