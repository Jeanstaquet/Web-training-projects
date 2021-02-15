import React from 'react';
import "./Backdrop.css"
const Backdrop = (props) => {
    return (
        <div className={props.show ? "backdrop" : "backdrop hide"} onClick={props.click}>
        </div>
    );
};

export default Backdrop;