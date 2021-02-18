import React, { useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import "./MenuLabels.css";
import Labels from "../Labels/Labels";
const SideMenu = (props) => {

    return (
        <div className={props.show ? "modal__menuLabels" : "modal__menuLabels hide"}>
            <p className="modal__menuLabelsTitle">Labels</p>
            <ClearIcon className="modal__menuLabelsClear" onClick={props.click}/>
            {Object.entries(props.data).map(([key, val]) => {
                return <Labels key={key} sideMenu={true} active={val} type={key} click={() => props.labelChangeHandler(key)}/>
            })}

        </div>
    );
};

export default SideMenu;