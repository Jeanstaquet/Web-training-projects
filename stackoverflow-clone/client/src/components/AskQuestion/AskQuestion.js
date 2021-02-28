import React, { useState } from 'react';
import "./AskQuestion.css";
import Banner from "../Banner/Banner";
import Button from "../UI/Button/Button";

const AskQuestion = (props) => {
    //Manages the state of the button
    const [btnLoad, setBtnLoad] = useState(false)
    const [btnOk, setBtnOk] = useState(false)

    //Handle the state of the button
    const btnHandler = (e) => {
        e.preventDefault();
        btnOk === false && setBtnLoad(true)
        
        setTimeout(() => {
            setBtnLoad(false)
            setBtnOk(true)
        }, 4000)
    }

    return (
        <>
            <Banner showModalHandler={props.showModalHandler}/>
            <div className="AskQuestion">
                <div className="AskQuestion__center">
                <h1>Ask a public question</h1>
                <div className="AskQuestion__form">
                    <div className="AskQuestion__title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you’re asking a question to another person</p>
                        <input type="text" placeholder="e.g. Is there an R function for finding the index of an element in a vector?"/>
                    </div>
                    <div className="AskQuestion__body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea></textarea>
                    
                    </div>
                    <div className="AskQuestion__tags">
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input placeholder="e.g. (css android excel)" type="text"/>
                    </div>
                </div>
                <Button onClick={(e) => btnHandler(e)} 
                        loading={btnLoad}
                        btnOk={!btnOk}>Review your question
                </Button>
                </div>

            </div>
        </>

    );
};

export default AskQuestion;