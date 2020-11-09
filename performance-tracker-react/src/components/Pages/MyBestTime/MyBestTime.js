import React from 'react';
import "./MyBestTime.scss"

import Crown from "../../../images/crown.svg"
function MyBestTime(props) {
    return (
        <div className="mybesttime__container">
            <section>
                <img src={Crown} alt="/"/>
                <h1>Your best personnal time:</h1>
                <p>11:11</p>
            </section>
            <section>
                <h3>Previous record:</h3>
            </section>
            <section>
                <a href="/">Add another activity</a>
            </section>
        </div>
    );
}

export default MyBestTime;