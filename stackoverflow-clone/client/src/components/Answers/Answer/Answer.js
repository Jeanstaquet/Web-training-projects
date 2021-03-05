import React from "react";
import "./Answer.css";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import DetailsIcon from "@material-ui/icons/Details";
import UserInfo from "../../UI/UserInfo/UserInfo";
const Answer = () => {
    return (
        <div className="Answer">
            <div className="Anwser__voteBtn">
                <ChangeHistoryIcon className="Answer__voteUp"/>
                <p>0</p>
                <DetailsIcon />
            </div>
            <div className="Answer__mainContent">
                <div className="Answer__Content">
                    <p>
                        I would like to automatically format TypeScript code
                        using the build-in formatter when I save a file in
                        Visual Studio Code.I would like to automatically format
                        TypeScript code using the build-in formatter when I save
                        a file in Visual Studio Code.I would like to
                        automatically format TypeScript code using the build-in
                        formatter when I save a file in Visual Studio Code.I
                        would like to automatically format TypeScript code using
                        the build-in formatter when I save a file in Visual
                        Studio Code.I would like to automatically format
                        TypeScript code using the build-in formatter when I save
                        a file in Visual Studio Code.
                    </p>
                </div>
                <div className="Answer__user">
                    <UserInfo />
                </div>
                <div className="Answer__comment">
                    <p>
                        is there a way to exclude some files? i.e I want to only
                        format .js files not .html files
                    </p>
                    <p>
                        is there a way to exclude some files? i.e I want to only
                        format .js files not .html files
                    </p>
                    <p>
                        is there a way to exclude some files? i.e I want to only
                        format .js files not .html files
                    </p>
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
