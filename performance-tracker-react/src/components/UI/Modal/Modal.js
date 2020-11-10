import React from 'react';
import "./Modal.scss";
function Modal(props) {
    return (
        <React.Fragment>
            <div className="modal__container">
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Modal;