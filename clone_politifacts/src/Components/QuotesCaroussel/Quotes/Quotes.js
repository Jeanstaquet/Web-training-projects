import React from "react";
import "./Quotes.css";

const quotes = (props) => {
    return (
        <div className="quotes_container">
            <div className="quotes_slides">
                <div className="slides_image"></div>
                    <div className="slides_container_quote">
                        <h2 className="slide_name">Joe Biden</h2>
                        <p className="slide_source">stated on September 21, 2020 in a speech: </p>
                        <p className="slide_quote">Says President Donald Trump started a trade war that “led to a surge in farm bankruptcies.” </p>
                    </div>
                <div className="slide_quotemeter"></div>
            </div>
            <div className="quotes_slides">
                    <div className="slides_image"></div>
                        <div className="slides_container_quote">
                            <h2 className="slide_name">Brit Hume</h2>
                            <p className="slide_source">stated on September 29, 2020 in a Fox News interview: </p>
                            <p className="slide_quote">“I don’t think there’s any doubt (Joe) Biden’s senile.”</p>
                        </div>
                <div className="slide_quotemeter"></div>
            </div>
            <div className="quotes_slides">
                <div className="slides_image"></div>
                <div className="slides_container_quote">
                    <h2 className="slide_name">Donald Trump</h2>
                    <p className="slide_source">stated on September 29, 2020 in the first 2020 presidential debate: </p>
                    <p className="slide_quote">President Barack Obama and Vice President Joe Biden “left me 128 judges to fill. You just don’t do that.”</p>
                </div>
                <div className="slide_quotemeter"></div>
            </div>
            <div className="quotes_slides">
                <div className="slides_image"></div>
                <div className="slides_container_quote">
                    <h2 className="slide_name">John Cornyn</h2>
                    <p className="slide_source">stated on September 12, 2020 in an advertisement: </p>
                    <p className="slide_quote">Says he “strongly supports legalization for Dreamers.”  </p>
                </div>
                <div className="slide_quotemeter"></div>
            </div>
        {props.children}
    </div>
    )
}

export default quotes