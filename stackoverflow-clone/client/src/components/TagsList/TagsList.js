import React from 'react';
import "./TagsList.css";
import Tag from "../Tag/Tag"; 
const TagsList = (props) => {

    return (
        <div className="TagsList">
            <div className="TagsList__titleContainer">
                <p className="TagsList__title">{props.title}</p>
                <p>{props.edit ? props.edit : null}</p>
            </div>
            <div className="TagsList__content">
                <Tag label="react"/>
                <Tag label="c#"/>
                <Tag label="jQuery"/>
                <Tag label="c++"/>
                <Tag label="react native"/>
                <Tag label="javascript"/>
            </div>
        </div>
    );
};

export default TagsList;