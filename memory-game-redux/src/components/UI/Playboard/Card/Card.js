import React from 'react';
import "./Card.scss"

function Card(props) {
    let classes = ["flipCard__inner", props.turn ? "rot": null];
    return (
        <div className="flipCard" onClick={props.click}>
            <div className={classes.join(" ")}>
                <div className="flipCard__front">
                    <div className="img"></div>
                    {/* <img src="https://picsum.photos/200/300" alt="ss"/> */}
                </div>
                <div className="flipCard__back">
                    <h1>{props.number}</h1>
                </div>
            </div>
        </div>
    );
}

export default Card;