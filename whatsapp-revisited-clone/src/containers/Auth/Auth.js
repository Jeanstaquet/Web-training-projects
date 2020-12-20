import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./Auth.scss";
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import * as actions from "../../store/action/index";
import { Redirect } from 'react-router-dom';

const Auth = (props) => {
    const [email, setEmail] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [method, setMethod] = useState("Register");
    const [errorMessage, setErrorMessage] = useState(false)
    const [data, setData] = useState([])

    const authCreateHandler = (e) => {
        e.preventDefault();
        //props.registerMethod();
        if(pseudo.length < 1 || email.length < 1 || password < 1) {
            setErrorMessage(true)
            setTimeout(() => {
                setErrorMessage(false)
            }, 5000)
        } else {
            let meth = true;
            if(method==="Login") {
                meth = false
            }
            
            props.auth(email, password, pseudo, meth);
        }
    }


    const switchMethod = () => {
        if(method === "Register") {
            //props.loginMethod();
            setMethod("Login");
        } else if (method === "Login") {
            setMethod("Register");
            //props.registerMethod();
        }
    }


    let redirect = true;
    if(props.isAuth) {
        redirect = <Redirect to="/app"/>
    }
    return (
        <div className="auth__background">
            {redirect}
            <div className="auth__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Whatsapp_logo.svg" alt="whatsapp logo"/>
                <div className="authW__container">
                    <h2><span onClick={switchMethod} className={method==="Register" ? "auth__loginButton": null}>Login</span> or <span onClick={switchMethod} className={!(method==="Register") ? "auth__registerButton": null}>create a new account</span></h2>
                    <button onClick={() => props.signWithGoogle()}>{method==="Register" ? "Create an account with Google" : "Login with Google"}</button>
                </div>
                <p>OR</p>
                
                <form className="authNormal__container">
                <h4>{method==="Register" ? "Create an account with your informations" : "Enter your information"}</h4>
                    {errorMessage ? <p className="error__message">You should include a pseudo, email and password</p> : null}
                    <TextField onChange={(e) => setEmail(e.target.value)}
                        id="filled-password-input"
                        label="Email"
                        type="email"
                        value={email}
                    />
                    {method==="Register" ? <TextField onChange={(e) => setPseudo(e.target.value)}
                        id="filled-password-input"
                        label="Pseudo"
                        type="name"
                        required
                        value={pseudo}
                    />: null}
                    {method==="Register" ? <span className="auth__available">Check if it is availble : <CloseIcon className="notOnScreen"/><DoneIcon/></span>: null}
                    <TextField onChange={(e) => setPassword(e.target.value)}
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        value={password}
                    />
                    <button type="submit" onClick={authCreateHandler}>{method==="Register" ? "Create an account" : "Login"}</button>
                </form>

            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.token && true,
        userId: state.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (e, p, pseudo, registred) => dispatch(actions.authEP(e, p, pseudo, registred)),
        // loginMethod: () => dispatch(actions.loginMethod()),
        // registerMethod: () => dispatch(actions.registerMethod())
        signWithGoogle: () => dispatch(actions.signWithGoogle())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);