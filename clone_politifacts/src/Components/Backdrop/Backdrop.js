import React from "react";
import "./Backdrop.css";

const backdrop = () => {
    return(
        <div className="backdrop-super-container">
            <div className="backdrop-container">
                <h2 className="backdrop-title">Payment Information</h2>
                <section className="frequency-container">
                    <h3 className="frequency-title">Frequency</h3>
                    <p className="frequency-type">Choose an contribution type</p>
                    <div className="freqeuncy-radio-container">
                        <label className="frequency_one">One Time
                            <input type="radio" checked="checked"></input>
                        </label>
                        <label className="frequency_two">Monthly
                            <input type="radio" checked="checked"></input>
                        </label>
                        <label className="frequency_three">Yearly
                            <input type="radio" checked="checked"></input>
                        </label>
                    </div>
                </section>
                <section className="time-container">
                    <h3 className="time-title">One-time Amount</h3>
                    <p className="time-details">Select how much you'd like to contribute</p>
                    <div className="time-container-amounts">
                        <button className="time-button">$ 200</button>
                        <button className="time-button">$ 120</button>
                        <button className="time-button">$ 300</button>
                        <div className="time-special-container">
                            <span className="time-dollar">$</span>
                            <input className="time-other" type="number" placeholder="other"></input>
                            <span className="time-time">/month</span>
                        </div>
                    </div>
                </section>
                <section className="continue-payement">
                    <button className="continue-payement-button">Continue to monthly payments</button>
                </section>
            </div>
        </div>
    )
}

export default backdrop;