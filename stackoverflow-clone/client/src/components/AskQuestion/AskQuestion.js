import React, { useContext, useState } from 'react';
import axios from "axios"
import "./AskQuestion.css";
import Banner from "../Banner/Banner";
import Button from "../UI/Button/Button";
import { useHistory } from "react-router-dom";
import {UserContext} from "../../UserContext";

const AskQuestion = (props) => {
    //Manages the state of the button
    const [btnLoad, setBtnLoad] = useState(false);
    const [btnOk, setBtnOk] = useState(false);

    //Manages the inputs
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    //Acces to the context of the user
    const {user} = useContext(UserContext);

    //Redirect 
    let history = useHistory();

    //Handle the state of the button
    const btnHandler = (e) => {
        e.preventDefault();
        btnOk === false && setBtnLoad(true)
        
        setTimeout(() => {
            setBtnLoad(false)
            setBtnOk(true)
            history.push("/")
        }, 3000)
    }

    const askQuestionHandler = () => {
        const data = {
            title: title,
            body: body,
            tags: tags
        }
        axios.post('http://localhost:5000/ask', data, {
            headers: {
              'Content-Type': 'application/json'
            }, withCredentials: true})
            .then(resp => {
                console.log(resp.data)
            })
    }
    return (
        <>
            <Banner 
                showModalHandler={props.showModalHandler}
                logoutHandler={props.logoutHandler}
            />
            <div className="AskQuestion">
                <div className="AskQuestion__center">
                <h1>Ask a public question</h1>
                <div className="AskQuestion__form">
                    <div className="AskQuestion__title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you’re asking a question to another person</p>
                        <input 
                            type="text" 
                            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="AskQuestion__body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea onChange={(e) => setBody(e.target.value)}></textarea>
                    
                    </div>
                    <div className="AskQuestion__tags">
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input 
                            placeholder="e.g. (css android excel)" 
                            type="text"
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                </div>
                <Button onClick={(e) => {
                    askQuestionHandler()
                    btnHandler(e)}} 
                        disabled={user && true}
                        loading={btnLoad}
                        askQuestionHandler={askQuestionHandler}
                        btnOk={!btnOk}>Review your question
                </Button>
                </div>

            </div>
        </>

    );
};

export default AskQuestion;