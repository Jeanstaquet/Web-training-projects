import React from "react";
import "./QuotesCarroussel.css";
import Quotes from "./Quotes/Quotes"


const nextHandler = (ind) => {
    let current = ind;
    if(current == 3) {
        current = 0
    } else {
        current += 1;
    }

    let indexDot = document.querySelectorAll(".quotes_slides");
    for(let i=0; i < indexDot.length; i++) {
        if(i === ind) {
            indexDot[i].classList.remove("non-active")
            indexDot[i].classList.add("active")
            continue
        } else {
            indexDot[i].classList.remove("active")
            indexDot[i].classList.add("non-active")
        }
    }
    let dots = document.querySelectorAll(".dot")
    for(let i = 0; i < dots.length; i++) {
        if(i == ind) {
            dots[i].classList.add("dot-active")
        } else {
            dots[i].classList.remove("dot-active")
        }
    }
    return current;
}

const previousHandler = (ind) => {
    let current = ind;
    if(current == 0) {
        current = 3
    } else {
        current -= 1;
    }

    let indexDot = document.querySelectorAll(".quotes_slides");
    for(let i=0; i < indexDot.length; i++) {
        if(i === ind) {
            indexDot[i].classList.remove("non-active");
            indexDot[i].classList.add("active");
            continue
        } else {
            indexDot[i].classList.remove("active");
            indexDot[i].classList.add("non-active");
        }
    }
    let dots = document.querySelectorAll(".dot");
    for(let i = 0; i < dots.length; i++) {
        if(i == ind) {
            dots[i].classList.add("dot-active");
        } else {
            dots[i].classList.remove("dot-active");
        }
    }
    return current;
}



const quotesCarrousel = (props) => {
    return (
        <Quotes>
            <a className="prev" onClick={() => props.data.changeIndex(props.index, previousHandler)}>❮</a>
            <a className="next" onClick={() => props.data.changeIndex(props.index, nextHandler)}>❯</a>
            <div className="dot-container">
                <span className="dot dot-active" ></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </Quotes>
    )
}

export default quotesCarrousel;