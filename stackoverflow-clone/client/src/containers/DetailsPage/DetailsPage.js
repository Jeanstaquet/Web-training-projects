import React, { useEffect, useState } from "react";
import Answer from "../../components/Answers/Answer/Answer";
import YourAnswer from "../../components/Answers/YourAnswer/YourAnswer";
import QuestionHP from "../../components/Questions/QuestionHP/QuestionHP";
import Filter from "../../components/UI/Filter/Filter";
import axios from "axios";
import "./DetailsPage.css";
const DetailsPage = (props) => {
    //User current answer
    const [yourAnswer, setYourAnswer] = useState("");
    //Store all the answers of the post
    const [answers, setAnswers] = useState([]);
    //Resp of the server
    const [resp, setResp] = useState("");
    //Comment
    const [comment, setComment] = useState("")
    const {
        _id,
        content,
        creator,
        answer,
        point,
        tag,
        time,
        title,
    } = props.selectedPost;

    //Get the answers the post
    useEffect(() => {
        axios
            .get(`http://localhost:5000/answers/${_id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then((res) => setAnswers(res.data));
    }, [answers.values, resp]);

    //Post an answer to the db
    const postAnswer = () => {
        const data = {
            answer: yourAnswer,
            postId: _id,
        };
        axios
            .post("http://localhost:5000/answer", data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then((resp) => setResp(resp))
            .catch((err) => setResp(err));
    };

    //Change the points of a post
    const changePoints = (id, method) => {
        const data = { answerId: id, method: method };
        axios
            .post("http://localhost:5000/point", data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then((resp) => setResp(resp))
            .catch((err) => setResp(err));
    };

    return (
        <>
            <QuestionHP
                key={_id}
                id={_id}
                point={point}
                answer={answer}
                title={title}
                content={content}
                creator={creator}
                time={String(new Date(time))}
            />
            <div className="DetailsPage__answers">
                <h2>Answer(s)</h2>
                <Filter />
            </div>
            {answers.map(
                ({ _id, author, content, comment, time, point }, index) => {
                    return (
                        <Answer
                            id={_id}
                            key={_id}
                            author={author}
                            point={point}
                            content={content}
                            comment={comment}
                            time={time}
                            changePoints={changePoints}
                            setComment={setComment}
                        />
                    );
                }
            )}
            <YourAnswer
                postAnswer={postAnswer}
                yourAnswer={yourAnswer}
                setYourAnswer={setYourAnswer}
            />
        </>
    );
};

export default DetailsPage;
