import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import "./MenuLabels.css";
import Labels from "../Labels/Labels";
const SideMenu = (props) => {
    return (
        <div className={props.show ? "modal__menuLabels" : "modal__menuLabels hide"}>
            <p className="modal__menuLabelsTitle">Labels</p>
            <ClearIcon className="modal__menuLabelsClear" onClick={props.click}/>
            <Labels sideMenu={true} type="Urgent"/>
            <Labels sideMenu={true} type="Team IT"/>
            <Labels sideMenu={true} type="Soon finished"/>
            <Labels sideMenu={true} type="Prioritize"/>
            <Labels sideMenu={true} type="S.O.S."/>
        </div>
    );
};

export default SideMenu;