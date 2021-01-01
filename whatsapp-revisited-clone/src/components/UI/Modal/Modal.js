import React from 'react';
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";
import { CSSTransition } from 'react-transition-group';
import AddIcon from '@material-ui/icons/Add';
const Modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} click={props.click}/>
            <CSSTransition in={props.show} timeout={300} classNames={"modal-transition"} unmountOnExit >
            <div className="modal__container" >
                <form>
                    <h4>{props.errorMessage}</h4>
                    <label>Choose a new conversation name</label>
                    <input className={props.errorMessage ? "errorInput" : null} placeholder="Name" onChange={(e) => props.change(e)}/>
                    <label>Add the pseudo of your the receiver:</label>
                    <div className="modal__addPerson">
                        <input className={props.errorMessage ? "errorInput" : null} type="text" placeholder="Pseudo" onChange={(e) => props.changeContact(e)}/>
                    </div>
                    <div className="modal__button">
                        <button onClick={props.ok}>OK</button>
                        <button onClick={props.click}>Cancel</button>
                    </div>
                </form>
            </div>
            </CSSTransition>
        </React.Fragment>

    );
};

export default Modal;