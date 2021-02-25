import React from 'react';
import "./Toolbox.css";
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
const Toolbox = (props) => {
    return (
        <div className="toolbox">
            <div className="toolbox__mainActions">
                <UndoIcon/>
                <RedoIcon/>
                <SpellcheckIcon/>
                <FormatPaintIcon/>
            </div>
            <div className="toolbox_zoom">
                <p>100%</p>
            </div>
            <div className="toolboxTextType">
                <p>Normal text</p>
            </div>
            <div className="toolbox__fontFam">
                <p>Arial</p>
            </div>
            <div className="toolbox__textSize">
                <p>11</p>
            </div>
            <div className="toolbox__editMode">
                <EditIcon/>
            </div>
        </div>
    );
};

export default Toolbox;