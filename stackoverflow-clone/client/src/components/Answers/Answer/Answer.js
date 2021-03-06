import React from "react";
import "./Answer.css";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import DetailsIcon from "@material-ui/icons/Details";
import UserInfo from "../../UI/UserInfo/UserInfo";
const Answer = (props) => {
    return (
        <div className="Answer">
            <div className="Anwser__voteBtn">
                <ChangeHistoryIcon className="Answer__voteUp" onClick={() => props.changePoints(props.id, "up")}/>
                <p>{props.point}</p>
                <DetailsIcon onClick={() => props.changePoints(props.id, "down")}/>
            </div>
            <div className="Answer__mainContent">
                <div className="Answer__Content">
                    <p>
                        {props.content}
                    </p>
                </div>
                <div className="Answer__user">
                    <UserInfo pseudo={props.author.pseudo} time={props.time}/>
                </div>
                <div className="Answer__comment">
                    <p>
                        is there a way to exclude some files? i.e I want to only
                        format .js files not .html files
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Answer;
