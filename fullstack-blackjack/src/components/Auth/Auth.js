import React from 'react';
import "./Auth.scss";

function Auth(props) {
    return (
        <div className="auth__page">
            <form className="auth__container">
                <h3>Add your information to sign up</h3>
                <label>Email</label>
                <input type="email" name="email" placeholder="Type your email here 🚀"/>
                <label>Password</label>
                <input type="password" name="password" placeholder="Type your password here ! 🚀"/>
                <label>Re-type your password</label>
                <input type="password" placeholder="Type your password here !  🚀"/>
                <button type="submit" onClick={(e) => e.preventDefault()}>Log-in</button>
            </form>
        </div>
    );
}

export default Auth;