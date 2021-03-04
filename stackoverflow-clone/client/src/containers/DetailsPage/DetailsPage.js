import React from "react";
import Answer from "../../components/Answers/Answer/Answer";
import YourAnswer from "../../components/Answers/YourAnswer/YourAnswer";
import QuestionHP from "../../components/Questions/QuestionHP/QuestionHP";
import Filter from "../../components/UI/Filter/Filter";
import "./DetailsPage.css";
const DetailsPage = (props) => {
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
      <Answer/>
      <YourAnswer/>
    </>
  );
};

export default DetailsPage;
