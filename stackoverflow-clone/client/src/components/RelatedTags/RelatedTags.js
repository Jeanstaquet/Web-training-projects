import React from 'react';
import "./RelatedTags.css";
import Tag from "../Tag/Tag";
const RelatedTags = () => {
    return (
        <div className="RelatedTags">
            <h4 className="RelatedTags__title">Related Tags</h4>
            <div className="RelatedTags__tagsContainer">
                <Tag label="css"/>
                <Tag label="javascript"/>
                <Tag label="c#"/>
                <Tag label="javascript"/>
            </div>
        </div>
    );
};

export default RelatedTags;