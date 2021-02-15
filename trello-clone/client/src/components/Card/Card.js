import React from 'react';
import "./Card.css"
import CreateIcon from '@material-ui/icons/Create';
const Card = () => {
    return (
        <div className="card">
            <div className="card__createIconContainer">
            <CreateIcon className="card__createIcon"/>
            </div>

            <div className="card__labelText"></div>
            <p className="card__text">Astuce Trello: Une fois un responsable désigné, c'est ici que se retrouvent toutes les tâches et projets, pour que quiconque sache qui travaille sur quoi et avec quelle date butoir.</p>
        </div>
    );
};

export default Card;