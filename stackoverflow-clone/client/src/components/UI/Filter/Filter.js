import React from 'react';
import "./Filter.css";
const Filter = () => {
    return (
        <div className="filter">
            <p className="filterActive">Newest</p>
            <p>Older</p>
            <p>Popular</p>
            <p>No answers</p>
        </div>
    );
};

export default Filter;