import React from 'react';
import "./Cards.css";
import Card from "./Card/Card";
const Cards = (props) => {
    return (
        <div className="cards__container">
            {props.data.map((job, index) => {
                return <Card
                    logo={job.logo}
                    date={job.date}
                    type={job.type}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    key={index}/>
            })}
        </div>
    );
};

export default Cards;