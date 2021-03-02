import React from 'react';
import "./HomePage.css";
import QuestionHP from "../../components/Questions/QuestionHP/QuestionHP";
const HomePage = (props) => {

    return (
        <>
            {props.posts ? props.posts.map((post, index) => {
                    console.log()
                return  <QuestionHP 
                            key={post._id}
                            point={post.point}
                            answer={post.answer}
                            title={post.title}
                            content={post.content}
                        />
            }): null}
            <QuestionHP />
        </>
    );
};

export default HomePage;