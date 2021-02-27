import React from 'react';

import "./Tag.css"
const Tag = (props) => {
    return (
        <div className="tag">
          <p>{props.label}</p>      
        </div>
    );
};

export default Tag;