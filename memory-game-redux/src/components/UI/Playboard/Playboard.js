import React, { useState } from 'react';
import "./Playboard.scss";
import Card from "./Card/Card";

function Playboard(props) {
    const [shouldTurn, setShouldturn] = useState(false)

    const flipHandler = () => {
        setShouldturn(!shouldTurn)
    }

    return (
        <div className="playboard__container">
            <Card number="1" turn={flipHandler} doTurn={shouldTurn}/>
            <Card number="1" turn={flipHandler} doTurn={shouldTurn}/>
        </div>
    );
}

export default Playboard;