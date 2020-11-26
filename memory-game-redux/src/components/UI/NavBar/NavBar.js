import React from 'react';
import "./NavBar.scss"

function NavBar(props) {
    return (
        <React.Fragment>
            <div className="navBar__container">
                <div className="header__newGame">
                    <div className="dropdrow__container">
                        <p className="newGame__button">New Game</p>
                        <div className="dropdrow__content">
                            <p>Start a new game</p>
                            <p>Start a challenge</p>
                            <p>Start a random game</p>
                        </div>
                    </div>
                    <p>Load a Game</p>
                </div>
                <div className="header__previousGame">
                    <p>Previous Games</p>
                </div>
            </div>
            {props.children}
        </React.Fragment>

    );
}

export default NavBar;