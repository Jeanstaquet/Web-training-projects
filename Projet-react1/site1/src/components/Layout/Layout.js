import React from "react";
import "./Layout.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import MainContent from "../MainContent/MainContent";

const layout = (props) => (
    <div>
        <NavigationBar/>
        <MainContent/>
    </div>
)

export default layout;