import React from "react";
import "./CommentInput.css";
const CommentInput = (props) => {
    return (
        <form className="CommentInput">
            <input type="text" placeholder="Add a comment" onChange={e => props.setComment(e.target.value)}/>
            <button type="submit" onClick={(e) => props.commentHandler(e, props.id)}></button>
        </form>
    );
};

export default CommentInput;
