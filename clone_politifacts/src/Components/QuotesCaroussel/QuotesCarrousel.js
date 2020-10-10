import React from "react";
import "./QuotesCarroussel.css";
import Quotes from "./Quotes/Quotes"

const quotesCarrousel = (props) => {
    return (
        <Quotes>
            <a class="prev" onClick={props.prev}>❮</a>
            <a class="next" onClick={props.next}>❯</a>
            <div className="dot-container">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </Quotes>
    )
}

export default quotesCarrousel;