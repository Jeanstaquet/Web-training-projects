import React from "react";
import "./Resume.css"

const resume = (props) =>{
    let value = props.data
    return(
    <div className="main-container">
        <div className="logo">
        </div>
        <h1 className="main-title">Resume</h1>
        <div className="main-content">
            <section className="main-section">
                <h2 className="main-section__title">Lorem ipsum odor amet, consectetuer adipiscing elit</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero urna. Fusce pretium tortor at leo imperdiet semper.</p>
                <img src="https://picsum.photos/400/301"></img>
                <a href="#">Discover More</a>
            </section>
            <section className="main-section">
                <p className="main-section__best-choice">Best Choice</p>
                <h2 className="main-section__title">Lorem ipsum odor amet, consectetuer adipiscing elit</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero urna. Fusce pretium tortor at leo imperdiet semper.</p>
                <img src="https://picsum.photos/400/300"></img>
                <a href="#">Discover More</a>
            </section>
            <section className="main-section">
                <h2 className="main-section__title">Lorem ipsum odor amet, consectetuer adipiscing elit</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero urna. Fusce pretium tortor at leo imperdiet semper.</p>
                <img src="https://picsum.photos/400/302"></img>
                <a href="#">Discover More</a>
            </section>
        </div>  
    </div>
    )
}


export default resume;