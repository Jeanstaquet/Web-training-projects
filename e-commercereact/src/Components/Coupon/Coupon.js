import React from "react";
import "./Coupon.scss"
const coupon = () => {
    return (
        <div className="coupon-container">
            <form className="coupon-form">
                <label>Use your coupon:</label>
                <input type="text" placeholder="Enter your coupon"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default coupon;