import React, { useEffect, useState } from 'react';
import "./Auth.scss";
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

const Auth = () => {
    const [name, setName] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

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
                    <TextField onChange={(e) => setName(e.target.value)}
                        id="filled-password-input"
                        label="Name"
                        type="name"
                        value={name}
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
                    <button type="submit">Subscribe</button>
                </form>

            </div>
        </div>
    );
};

export default Auth;