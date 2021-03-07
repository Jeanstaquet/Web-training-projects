import React from "react";
import "./CommentInput.css";
const CommentInput = (props) => {
    return (
        <form className="CommentInput">
            <input type="text" placeholder="Add a comment" onChange={e => props.setComment(e.target.value)}/>
            <button type="submit" ></button>
        </form>
    );
};

export default CommentInput;
