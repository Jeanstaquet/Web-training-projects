import React from 'react';
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import AddIcon from '@material-ui/icons/Add';
import Labels from "./Labels/Labels"
import SubjectIcon from '@material-ui/icons/Subject';

const Modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop click={props.click}/>
            <div className="modal__box">
                <div className="modal">
                    <h2>Title of the column</h2>
                    <div className="modal__labelContainer">
                        <p className="modal__labelTitle">LABELS</p>
                        <div className="modal__labelList">
                            <Labels type="Soon finished"/>
                            <Labels type="Team IT"/>
                            <AddIcon className="modal__labelListAddItem"/>
                        </div>
                    </div>
                    <div className="modal__descriptionContainer">
                        <div className="modal__descriptionTitle">
                            <SubjectIcon/>
                            <h2>Description</h2>
                        </div>

                        <div className="modal__descriptionInputContainer">
                            <textarea placeholder="Description..."></textarea>
                        </div>
                    </div>
                    <div className="modal__activityContainer">
                        <div className="modal__activityUser">JS</div>
                        <input type="text"/>
                    </div>
                    <div className="commentSection">
                        <div className="modal__activityUser">JS</div>
                        <p></p>
                    </div>
                    <button>Save</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;