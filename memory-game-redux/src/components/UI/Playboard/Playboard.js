import React from 'react';
import "./Playboard.scss";

function Playboard(props) {
    return (
        <div className="playboard__container">
           <div className="playboard__cartContainer">
                   <div className="flipCard">
                       <div className="flipCard__inner">
                           <div className="flipCard__front">
                               <img src="https://picsum.photos/200/300" alt="ss"/>
                           </div>
                           <div className="flipCard__back">
                                <h1>1</h1>
                           </div>
                       </div>
                   </div>
            </div> 
        </div>
    );
}

export default Playboard;