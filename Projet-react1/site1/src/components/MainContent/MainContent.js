import React from "react";
import Resume from "./Contents/Resume/Resume";

import AboutMe from "./Contents/AboutMe/AboutMe";

import Project from "./Contents/Project/Project"

const componentMapping = {
    Resume, AboutMe, Project
}
console.log(Resume)
const mainContent = (props) =>{
    const rightComponent = [props.data]
    return(
        <div>
        {
            rightComponent.map((componentName, index) => {
                const Component = componentMapping[componentName];
                return <Component key={index}/>;
            })
        }
        </div>
    )
}


export default mainContent;