import React from 'react';
import "./ModalJob.css";
import Backdrop from "../BackDrop/BackDrop";
const ModalJob = (props) => {
    return (
        <React.Fragment>
            <Backdrop/>
            <div className="modalJob__container">
                {props.data.description}
            </div>
        </React.Fragment>
    );
};

export default ModalJob;