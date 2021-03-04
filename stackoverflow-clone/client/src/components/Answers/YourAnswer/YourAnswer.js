import React from "react";
import Button from "../../UI/Button/Button";
import "./YourAnswer.css";
const YourAnswer = () => {
  return (
    <div className="YourAnswer">
      <h3>Your Answer</h3>
      <textarea></textarea>
      <p>
        Not the answer you're looking for? Browse other questions tagged
        {"<tag>"} or ask your own
        question.
      </p>
      <Button btnOk={true}>Post your answer</Button>
    </div>
  );
};

export default YourAnswer;
