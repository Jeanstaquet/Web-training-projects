import React from 'react';
import "./Card.css";
const Card = (props) => {
    return (
        <div className="card__container">
            <img className={props.logo ? "card__logo" : null} src={props.logo}/>
            <div className="card__timeContainer">
                <p className="card__time">{props.date} day(s) ago</p>
                <p className="card__bullet">•</p>
                <p className="card__fullTime">{props.type}</p>
            </div>
            <p className="card__title">{props.title}</p>
            <p className="card__company">{props.company}</p>
            <p className="card__loaction">{props.location}</p>
        </div>
    );
};

export default Card;