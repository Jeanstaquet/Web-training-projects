import React from 'react';
import "./NewActivity.scss";
import Study from "../../../images/reading.svg";
import Coding from "../../../images/coding.svg";
import Working from "../../../images/working.svg";

function NewActivity(props) {
    return (
        <div className="newActivity__container">
            <h1>Begin a new session</h1>
            <section>
                <h3>Choose your type of track:</h3>
                <div>
                    <div>
                        <p>study session</p>
                        <img src={Study} alt=".."/>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <p>coding session</p>
                        <img src={Coding} alt=".."/>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <p>working session</p>
                        <img src={Working} alt=".."/>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </section>
            <section>
                <h2>Chrono: XXX</h2>
                <div>
                    <button type="submit">Begin</button>
                    <button type="submit">Stop</button>
                    <button type="submit">Continue</button>
                    <button type="submit">Save</button>
                </div>
            </section>
            <section>
                <h3>Summary of this activity</h3>
                <p>time: XX</p>
                <p>With your record, is this a performance ? NO/YES</p>
            </section>
        </div>
    );
}

export default NewActivity;