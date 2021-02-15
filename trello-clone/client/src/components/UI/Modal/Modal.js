import React, { useEffect, useState } from 'react';
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import Labels from "./Labels/Labels"
import SubjectIcon from '@material-ui/icons/Subject';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const Modal = (props) => {
    const [openInput, setOpenInput] = useState(false)

    return (
        <React.Fragment>
            <Backdrop click={() => props.modalHandler("close")} show={props.show}/>
            <div className={props.show ? "modal__box" : "hide modal_box"}>
                <div className="modal">
                    <ClearIcon onClick={() => props.modalHandler("close")} className="modal__close"/>
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
                        <div className="modal__activityTitle">
                            <FormatListBulletedIcon/>
                            <h3>Activity</h3>
                        </div>
                        <div className="modal__activityComment">
                            <div className="modal__activityUser">JS</div>
                            <div className={openInput ? "modal__activityUserTextArea inputGrow" : "modal__activityUserTextArea"}>
                                <input type="text" onClick={() => setOpenInput(!openInput)}/>
                                <button className={openInput ?"modal__activityUserButton" : "modal__activityUserButton hide"}>Save</button>
                            </div>

                        </div>

                    </div>
                    <button className="modal__saveBtn">Save</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;