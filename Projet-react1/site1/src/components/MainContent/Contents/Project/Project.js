import React from "react";
import "./Project.css";

const project = (props) => {
    return (
        <div className="project-container">
            <div className="project-logo"></div>
            <div className="project-title"><h1>Project</h1></div>
            <section className="project-section">
                <section className="project-section__section">
                    <h3 className="project-section__title">Project X</h3>
                    <p className="project-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <img src="https://picsum.photos/401/301"></img>
                </section>
                <section className="project-section__section">
                    <h3 className="project-section__title">Project A</h3>
                    <p className="project-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <img src="https://picsum.photos/400/321"></img>
                </section>
                <section className="project-section__section">
                    <h3 className="project-section__title">Project F</h3>
                    <p className="project-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <img src="https://picsum.photos/410/301"></img>
                </section>
                <section className="project-section__section">
                    <h3 className="project-section__title">Project V</h3>
                    <p className="project-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <img src="https://picsum.photos/400/311"></img>
                </section>
                <section className="project-section__section">
                    <h3 className="project-section__title">Project W</h3>
                    <p className="project-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <img src="https://picsum.photos/405/301"></img>
                </section>
                <section className="project-section__section">
                    <h3 className="project-section__title">Project P</h3>
                    <p className="project-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <img src="https://picsum.photos/409/301"></img>
                </section>
                <section className="project-section__section">
                    <h3 className="project-section__title">Project P</h3>
                    <p className="project-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <img src="https://picsum.photos/410/321"></img>
                </section>
                <section className="project-section__section">
                    <h3 className="project-section__title">Project D</h3>
                    <p className="project-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <img src="https://picsum.photos/405/301"></img>
                </section>
            </section>
        </div>
    )
} 

export default project;