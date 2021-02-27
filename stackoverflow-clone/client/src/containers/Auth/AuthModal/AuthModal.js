import React from 'react';
import "./AuthModal.css";
import ClearIcon from '@material-ui/icons/Clear';
import Button from "../../../components/UI/Button/Button";
const AuthModal = (props) => {
    return (
        <div className={props.show ? "AuthModal" : "AuthModal closeModal"}>
            {props.method === "Login" ? <h2>Login</h2> : <h2>SignIn</h2>}
            <span className="AuthModal__clear" onClick={props.close}><ClearIcon/></span>
            <form>
                <p className="AuthModal__email">Email</p>
                <input className="AuthModal__emailInput" type="text"/>
                <p className="AuthModal__password">Password</p>
                <input className="AuthModal__passwordInput" type="password"/>
                <Button>Log in</Button>
            </form>
            <p className="AuthModal__signUpLink">Don't have an account ? <span className="AuthModal__link" onClick={props.changeMethod}>Sign up</span></p>
        </div>
    );
};

export default AuthModal;