import React, { useEffect, useState } from 'react';
import "./HomePage.css";
import QuestionHP from "../../components/Questions/QuestionHP/QuestionHP";
import axios from "axios";
const HomePage = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/post")
            .then(resp => {
                console.log(resp)
            })
    }, []);

    return (
        <>
            <QuestionHP/>
        </>
    );
};

export default HomePage;