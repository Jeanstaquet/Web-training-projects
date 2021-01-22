import React, { useEffect, useState } from 'react';
import "./JobsPage.css";
import Banner from "../../components/UI/Banner/Banner";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
const JobsPage = () => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node")
            .then(res => {
                console.log(res)
            })
    }, [])

    return (
        <div className="jobsPage__container">
            <Banner/>
            <SearchBar/>
            <Cards/>
        </div>
    );
};

export default JobsPage;