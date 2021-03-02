import React from 'react';
import "./QuestionHP.css";
import Tags from "../../Tag/Tag";
import UserInfo from "../../UI/UserInfo/UserInfo";
const QuestionHP = (props) => {
    return (
        <div className="QuestionHP">
            <div className="QuestionHP__nbr">
                <div className="QuestionHP__vote">
                    <h4>{props.point && true}</h4>
                    <p>votes</p>
                </div>
                <div className="QuestionHP__answers">
                    <h4>{props.answer !== undefined ? props.answer.length: null}</h4>
                    <p>answer(s)</p>
                </div>
                <span className="QuestionHP__viewNbr">2 views</span>
            </div>
            <div className="QuestionHP__info">
                <div className="QuestionHP__text">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
                <div className="QuestionHP__tagsProfile">
                    <div className="QuestionHP__tags">
                        <Tags label="c#"/>
                        <Tags label="javascript"/>
                    </div>
                    <UserInfo/>
                </div>
            </div>
        </div>
    );
};

export default QuestionHP;