import React from 'react';
import "./Auth.scss";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index"

function Auth(props) {
    
    let ui = <div className="auth__page">
            <form className="auth__container">
                <h3>Add your information to register</h3>
                <label>Email</label>
                <input type="email" name="email" placeholder="Type your email here 🚀"/>
                <label>Password</label>
                <input type="password" name="password" placeholder="Type your password here ! 🚀"/>
                <label>Re-type your password</label>
                <input type="password" placeholder="Type your password here !  🚀"/>
                <button type="submit" onClick={(e) => e.preventDefault()}>Register</button>
                <button type="submit" onClick={(e) => e.preventDefault()}>Register with whatsapp</button>
                <p onClick={() => props.click()}>Already an account ? Choose to log-in instead</p>
            </form>
        </div>

    if(props.type === "Log-in") {
        ui = <div className="auth__page">
        <form className="auth__container">
            <h3>Login your account</h3>
            <label>Email</label>
            <input type="email" name="email" placeholder="Type your email here 🚀"/>
            <label>Password</label>
            <input type="password" name="password" placeholder="Type your password here ! 🚀"/>
            <button type="submit" onClick={(e) => e.preventDefault()}>Login</button>
            <button type="submit" onClick={(e) => e.preventDefault()}>Login with Whatsapp</button>
            <p onClick={() => props.click()}>New on this app ? Choose to create an account</p>
        </form>
    </div>
    }
    return (
        ui
    );
}



export default Auth;