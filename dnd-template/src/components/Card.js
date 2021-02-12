import React from 'react';

const Card = (props) => {

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData("card_id", target.id);

        //Fait disparaitre la carte quand on commence à la prendre
        setTimeout(() => {
            target.style.display = "none";
        }, 0)
    }

    //POur éviter de dragger des cartes dans d'autres cartes
    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    );
};

export default Card;