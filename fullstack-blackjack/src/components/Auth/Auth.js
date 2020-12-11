import React, { useState } from 'react';
import "./Auth.scss";
import {Redirect} from "react-router-dom"
import {connect} from "react-redux";
import * as actions from "../../store/actions/index"

function Auth(props) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const registerHandler = (e, email, password) => {
        e.preventDefault();

        props.onAuth(email, password);
    }
    let redirect = null;

    if(props.isAuth) {
        redirect = <Redirect to="/"></Redirect>
    }

    let ui = <div className="auth__page">
            <form className="auth__container">
                <h3>Add your information to register</h3>
                <label>Email</label>
                <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Type your email here 🚀"/>
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} name="password" placeholder="Type your password here ! 🚀"/>
                <label>Re-type your password</label>
                <input type="password" placeholder="Type your password here !  🚀"/>
                <button type="submit" onClick={(e) => registerHandler(e, email, password)}>Register</button>
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
        <div>
            {ui}
            {redirect}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        isAuth: state.auth.token && true
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (e, p) => dispatch(actions.auth(e, p)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);