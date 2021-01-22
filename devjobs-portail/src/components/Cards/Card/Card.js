import React from 'react';
import "./Card.css";
const Card = () => {
    return (
        <div className="card__container">
            <span className="card__logo"></span>
            <div className="card__timeContainer">
                <p className="card__time">5H ago</p>
                <p className="card__bullet">•</p>
                <p className="card__fullTime">Full time</p>
            </div>
            <p className="card__title">Senior Software Engineer</p>
            <p className="card__company">So Digital Inc.</p>
            <p className="card__loaction">Remote, Russian Federation</p>
        </div>
    );
};

export default Card;