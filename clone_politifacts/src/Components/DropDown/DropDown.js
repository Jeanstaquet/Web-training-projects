import React from "react";
import "./DropDown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const dropdown = (props) => {
    return (
        <div className="drop-down__" style={{transform: props.show ? "translateY(0)" : "translateY(-100%)"}}>
            <div className="drop-down__container">
                <section className="drop-down_section">
                    <h3 className="drop-down_title">
                        STATE EDITIONS
                    </h3>
                    <ul className="drop-down_list">
                        <li className="drop-down_li">
                            California
                        </li>
                        <li className="drop-down_li">
                            Florida
                        </li>
                        <li className="drop-down_li">
                            Illinois    
                        </li>
                        <li className="drop-down_li">
                            Iowa
                        </li>
                        <li className="drop-down_li">
                            Missouri
                        </li>
                        <li className="drop-down_li">
                            New York
                        </li>
                    </ul>
                </section>
                <section className="drop-down_section">
                    <h3 className="drop-down_title">
                        ISSUES
                    </h3>
                    <ul className="drop-down_list">
                        <li className="drop-down_li">
                            Online hoaxes
                        </li>
                        <li className="drop-down_li">
                            Coronavirus
                        </li>
                        <li className="drop-down_li">
                            Health Care    
                        </li>
                        <li className="drop-down_li">
                            Immigration
                        </li>
                        <li className="drop-down_li">
                            Taxes
                        </li>
                    </ul>
                </section>
                <section className="drop-down_section">
                    <h3 className="drop-down_title">
                        People
                    </h3>
                    <ul className="drop-down_list">
                        <li className="drop-down_li">
                            Donald Trump
                        </li>
                        <li className="drop-down_li">
                            Mike Pence
                        </li>
                        <li className="drop-down_li">
                            Joe Biden 
                        </li>
                        <li className="drop-down_li">
                            Kamala Harris
                        </li>
                        <li className="drop-down_li">
                            Bernie Sanders
                        </li>
                        <li className="drop-down_li">
                            Nancy Pelosi
                        </li>
                    </ul>
                </section>
                <section className="drop-down_section">
                    <h3 className="drop-down_title">
                        MEDIA
                    </h3>
                    <ul className="drop-down_list">
                        <li className="drop-down_li">
                            PunditFact
                        </li>
                        <li className="drop-down_li">
                            Tucker Carlson
                        </li>
                        <li className="drop-down_li">
                            Sean Hannity    
                        </li>
                        <li className="drop-down_li">
                            Rachel Maddow
                        </li>
                        <li className="drop-down_li">
                            Rush Limbaugh
                        </li>
                        <li className="drop-down_li">
                            Bloggers
                        </li>
                    </ul>
                </section>
            <div className="test23">
                <section>
                    <h3>FOLLOW US</h3>
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faSearch} />
                </section>
                <section>
                    <h3>THE FACTS NEWSLETTER</h3>
                    <input type="text" value="Enter your email"></input>
                    <button type="submit">Sign up</button>
                </section>
            </div>
            </div>
        </div>
    )
}

export default dropdown