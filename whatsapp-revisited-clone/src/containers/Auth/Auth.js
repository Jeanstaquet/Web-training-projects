import React, {useState } from 'react';
import { connect } from 'react-redux';
import "./Auth.scss";
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import * as actions from "../../store/action/index";

const Auth = (props) => {
    const [email, setEmail] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

    const authCreateHandler = (e) => {
        e.preventDefault()
        props.auth(email, password, true)
    }

    return (
        <div className="auth__background">
            <div className="auth__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Whatsapp_logo.svg" alt="whatsapp logo"/>
                <div className="authW__container">
                    <h2>Login or create a new account</h2>
                    <button type="submit">Create an account with Google</button>
                </div>
                <p>OR</p>
                
                <form className="authNormal__container">
                <h4>Create an account with your informations</h4>
                    <TextField onChange={(e) => setEmail(e.target.value)}
                        id="filled-password-input"
                        label="Email"
                        type="email"
                        value={email}
                    />
                    <TextField onChange={(e) => setPseudo(e.target.value)}
                        id="filled-password-input"
                        label="Pseudo"
                        type="name"
                        value={pseudo}
                    />
                    <span className="auth__available">Check if it is availble : <CloseIcon className="notOnScreen"/><DoneIcon/></span>
                    <TextField onChange={(e) => setPassword(e.target.value)}
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        value={password}
                    />
                    <button type="submit" onClick={authCreateHandler}>Subscribe</button>
                </form>

            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.token,
        userId: state.userId,
        expirationTime: state.expirationTime
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (e, p, registred) => dispatch(actions.auth(e, p, registred))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);