import React from 'react';
import "./MainTitle.css";
import Filter from "../UI/Filter/Filter";
import Button from "../UI/Button/Button";
const MainTitle = (props) => {
    return (
        <div className="MainTitle">
            <div className="MainTitle__Questions">
                <h1>All Questions</h1>
                <p>20,895, 410 quesyions</p>
            </div>
            <div className="MainTitle__controls">
                <Button>Ask Question</Button>
                <Filter/>
            </div>
        </div>
    );
};

export default MainTitle;