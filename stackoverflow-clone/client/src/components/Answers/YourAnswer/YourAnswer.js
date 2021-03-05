import React from "react";
import Button from "../../UI/Button/Button";
import "./YourAnswer.css";
const YourAnswer = (props) => {
    return (
        <div className="YourAnswer">
            <h3>Your Answer</h3>
            <textarea
                onChange={(e) => props.setYourAnswer(e.target.value)}
                value={props.yourAnswer}
            ></textarea>
            <p>
                Not the answer you're looking for? Browse other questions tagged
                {"<tag>"} or ask your own question.
            </p>
            <Button onClick={props.postAnswer} btnOk={true}>
                Post your answer
            </Button>
        </div>
    );
};

export default YourAnswer;
