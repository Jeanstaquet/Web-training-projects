import React from "react";
import "./Backdrop.css";

const backdrop = (props) => {
    return (
        <div className="backdrop-container">
            <form className="backdrop-form">
                <span className="backdrop-X" onClick={props.contact}>X</span>
                <h1 className="backdrop-title">Contact from:</h1>
                <label for="name" className="name">Name:</label>
                <input type="text" id="name" className="name1"></input>
                <label for="company" className="company">Company:</label>
                <input type="text" id="company" value="Exemple Corp." className="company1"></input>
                <label for="message" className="message">Message:</label>
                <textarea type="text" id="message" value="Message..." className="message1"></textarea>
                <button type="submit" className="submit" onClick={props.contact}>Submit</button>
            </form>
        </div>
    )
}

export default backdrop;
