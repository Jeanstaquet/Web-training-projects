import React from 'react';
import "./AuthModal.css";
import ClearIcon from '@material-ui/icons/Clear';
import Button from "../../../components/UI/Button/Button";
const AuthModal = (props) => {
    return (
        <div className={props.show ? "AuthModal" : "AuthModal hideModal"}>
            {props.authMethod === "Login" ? <h2>Login</h2> : <h2>Sign Up</h2>}
            <p style={{marginTop: "10px", color: "red"}}>{props.errorAuth}</p>
            <span 
                className="AuthModal__clear" 
                onClick={props.close}>
                <ClearIcon/>
            </span>
            <form>
                <p className="AuthModal__email">Email</p>
                <input
                    value={props.email} 
                    onChange={e => props.setEmail(e.target.value)} 
                    className="AuthModal__emailInput" 
                    type="text"
                />
                <p className="AuthModal__password">Password</p>
                <input 
                    value={props.password} 
                    onChange={e => props.setPassword(e.target.value)} 
                    className="AuthModal__passwordInput" 
                    type="password"/>
                <p 
                    className={props.authMethod === "Login" ? "AuthModal__password hideModal" : "AuthModal__password"}
                    >Pseudo
                </p>
                <input 
                    value={props.pseudo} 
                    onChange={e => props.setPseudo(e.target.value)} 
                    className={props.authMethod === "Login" ? "AuthModal__passwordInput hideModal" : "AuthModal__passwordInput"} 
                    type="text"
                />
                <Button onClick={props.authMethod === "Login" ? (event) => props.authHandler(event, "Login"): (event) => props.authHandler(event, "Signup")}>
                    {props.authMethod === "Login" ? "Login" : "Sign up"}
                </Button>
            </form>
            <p 
                className="AuthModal__signUpLink"
                >Don't have an account ? 
                    <span className="AuthModal__link" 
                        onClick={props.changeMethod}
                        >{props.authMethod === "Login" ? " Sign up" : " Login"}
                    </span>
            </p>
        </div>
    );
};

export default AuthModal;