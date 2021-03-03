import React from 'react';
import "./HomePage.css";
import QuestionHP from "../../components/Questions/QuestionHP/QuestionHP";
import {withRouter} from "react-router-dom"
const HomePage = (props) => {
    return (
        <>
            {props.posts ? props.posts.sort((posta, postb) => new Date(postb.time) - new Date(posta.time)).map((post, index) => {
                return  <QuestionHP 
                            key={post._id}
                            id={post._id}
                            point={post.point}
                            answer={post.answer}
                            title={post.title}
                            content={post.content}
                            creator={post.creator}
                            time={String(new Date(post.time))}
                        />

            }): null}
        </>
    );
};

export default withRouter(HomePage);