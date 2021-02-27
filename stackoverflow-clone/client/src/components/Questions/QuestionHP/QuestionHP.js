import React from 'react';
import "./QuestionHP.css";
import Tags from "../../Tag/Tag";
import UserInfo from "../../UI/UserInfo/UserInfo";
const QuestionHP = () => {
    return (
        <div className="QuestionHP">
            <div className="QuestionHP__nbr">
                <div className="QuestionHP__vote">
                    <h4>0</h4>
                    <p>votes</p>
                </div>
                <div className="QuestionHP__answers">
                    <h4>0</h4>
                    <p>answer</p>
                </div>
                <span className="QuestionHP__viewNbr">2 views</span>
            </div>
            <div className="QuestionHP__info">
                <div className="QuestionHP__text">
                    <h3>Razor Pages .Net Core - Calling C# method from Javascript / AJax</h3>
                    <p>I have looked at a good few examples online of how to contact a .Net Core C# method from an Ajax call in Razor Pages - however having gone through a bunch of examples I can't seem to figure out why I ... </p>
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