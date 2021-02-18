import React, { useEffect, useState } from 'react';
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import Labels from "./Labels/Labels"
import SubjectIcon from '@material-ui/icons/Subject';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MenuLabels from './MenuLabels/MenuLabels';
import {useAppData} from "../../../Context/index"

const Modal = (props) => {
    const state = useAppData()
    //Side menu variables
    const [openInput, setOpenInput] = useState(false)
    const [openMenuLabel, setOpenMenuLabel] = useState(false);
    const [labelsHandler, setLabelsHandler] = useState(
        {Urgent: true,
        TeamIt: false,
        Soonfinished: false,
        Prioritize: false,
        SOS: false
    });

    
    const labelChangeHandler = (type) => {
       const prevState = {...labelsHandler}
       if(prevState[type]) {
            prevState[type] = false
       } else {
            prevState[type] = true
       }
       
       setLabelsHandler(prevState)
    }


    const menuLabelHandler = () => {
        setOpenMenuLabel(!openMenuLabel)
    }

    return (
        <React.Fragment>
            <Backdrop click={() => props.modalHandler("close")} show={props.show}/>
            <div className={props.show ? "modal__box" : "hide modal_box transitOffScreen"}>
                <div className="modal">
                        <ClearIcon onClick={() => props.modalHandler("close")} className="modal__close"/>
                    <h2>Column: {props.title}</h2>
                    <div className="modal__labelContainer">
                        <p className="modal__labelTitle">LABELS</p>
                        <div className="modal__labelList">
                            {Object.entries(labelsHandler).map(([key, val]) => {
                                return labelsHandler[key] ? <Labels click={() => labelChangeHandler(key)} type={key} key={key}/> : null
                            })}
                            <AddIcon className="modal__labelListAddItem" onClick={menuLabelHandler}/>
                            <MenuLabels  data={labelsHandler} labelChangeHandler={labelChangeHandler} show={openMenuLabel} click={menuLabelHandler}/>
                        </div>
                    </div>
                    <div className="modal__descriptionContainer">
                        <div className="modal__descriptionTitle">
                            <SubjectIcon/>
                            <h2>Description</h2>
                        </div>

                        <div className="modal__descriptionInputContainer">
                            <textarea placeholder="Description..." value={props.val} onChange={e => props.changeDesc(e.target.value)}></textarea>
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
                    <button className="modal__saveBtn" onClick={props.save}>Save</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;