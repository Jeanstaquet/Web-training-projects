import React, { useEffect, useReducer, useState } from 'react';
import "./JobsPage.css";
import Banner from "../../components/UI/Banner/Banner";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
import Spinner from "./../../components/UI/Spinner/Spinner";

const initalState = {job: [],
                     loading: false}

const reducer = (state, action) => {
    switch(action.type) {
        case "BEGIN_FETCH":
            return {...state, loading: true}
        case "FETCH_SUCCESS":
            return {
                job: action.job, loading: false
            }
        default:
            throw new Error()
    }
}

//

const JobsPage = () => {
    const [state, dispatch] = useReducer(reducer, initalState)

    useEffect(() => {
        dispatch({type: "BEGIN_FETCH"})
        axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node")
        .then((res) => {
                dispatch({type: "FETCH_SUCCESS", job: res})
                console.log(res)
        });
    }, [])

    return (
        <div className="jobsPage__container">
            <Banner/>
            <SearchBar/>
            <Spinner loading={state.loading}/>
            <Cards/>
        </div>
    );
};

export default JobsPage;