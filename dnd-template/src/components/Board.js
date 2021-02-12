import React from 'react';

const Board = (props) => {

    //fonction pour dropper quelqch
    const drop = e => {
        e.preventDefault();
        //on transfère l'id entre ces events
        const card_id = e.dataTransfer.getData("card_id");

        //on prend cet élément et on le transfère sur le board
        const card = document.getElementById(card_id);
        card.style.display = "block";

        e.target.appendChild(card);
    }

    const dragOver = e => {
        //Permet de continuer avec la fonction de dropping
        e.preventDefault();

    }

    return (
        <div 
            id={props.id}
            className={props.className}
            //Les fonctions vont être callée quand on drag les 
            //card au dessus de quelque chose
            onDrop={drop}
            onDragOver={dragOver}
            >
            
            {props.children}
        </div>
    );
};

export default Board;