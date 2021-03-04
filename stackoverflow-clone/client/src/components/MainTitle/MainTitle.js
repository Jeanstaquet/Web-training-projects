import React from 'react';
import "./MainTitle.css";
import Filter from "../UI/Filter/Filter";
import Button from "../UI/Button/Button";
import { Link } from 'react-router-dom';

const MainTitle = (props) => {
    return (
        <div className="MainTitle">
            <div className="MainTitle__Questions">
                <h1>All Questions</h1>
                <p>20,895, 410 question</p>
            </div>
            <div className="MainTitle__controls">
                <Link to='/ask'><Button btnOk={true}>Ask Question</Button></Link>
                {props.title ? null :<Filter/>}
            </div>
        </div>
    );
};

export default MainTitle;