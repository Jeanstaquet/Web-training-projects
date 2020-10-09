import React from "react";
import "./Intro.css"

const intro = () => {
    return(
        <div className="intro-container">
            <div className="image_intro">
            </div>
            <div className="intro-rectangle">
                <div className="intro-qupte-wrapper"></div>
                <h3 className="intro-rect__title">Fact-checking the 2020 VP debate, Harris vs. Pence </h3>
                <p className="intro-rect__footer">By PolitiFact Staff • October 7, 2020</p>
            </div>
        </div>
    )
}

export default intro;