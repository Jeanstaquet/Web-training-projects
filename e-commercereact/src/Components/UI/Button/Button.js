import React from "react";
import "./Button.scss";

const button = (props) => (
    <button className={["Button", props.type].join(" ")} onClick={props.click}>{props.children}</button>
)

export default button;