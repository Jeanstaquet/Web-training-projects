import React, {useState } from 'react';
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

    const [method, setMethod] = useState("Register")

    const authCreateHandler = (e) => {
        e.preventDefault()
        let meth = true
        if(method==="Login") {
            meth = false
        }
        props.auth(email, password, meth)
    }

    const switchMethod = () => {
        if(method === "Register") {
            setMethod("Login")
        } else if (method === "Login") {
            setMethod("Register")
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
                    <button type="submit">{method==="Register" ? "Create an account with Google" : "Login with Google"}</button>
                </div>
                <p>OR</p>
                
                <form className="authNormal__container">
                <h4>{method==="Register" ? "Create an account with your informations" : "Enter your information"}</h4>
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
        isAuth: state.token && true
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (e, p, registred) => dispatch(actions.auth(e, p, registred))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);