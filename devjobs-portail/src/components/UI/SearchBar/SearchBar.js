import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Checkbox from '@material-ui/core/Checkbox';
const SearchBar = () => {
    return (
        <div className="searchBar__container">
            <div className="searchBar__containerInput1">
                <SearchIcon className="searchBar__search"/>
                <input placeholder="Filter by title, companies, expertise..." type="text"/>
            </div>
            <div className="searchBar__containerInput2">
                <LocationOnIcon className="searchBar__search"/>
                <input placeholder="Filter by location..." type="text"/>
            </div>
            <div className="searchBar__containerCheckBox">
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />                
                <p>Full Time Only</p>
                <button type="button">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;