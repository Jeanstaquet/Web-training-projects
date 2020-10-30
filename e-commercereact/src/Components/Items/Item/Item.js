import React from "react";
import "./Item.scss";
const item = (props) => {
    return (
        <div className="article-card">
            <section className="card-image" style={{backgroundImage: "url(https://picsum.photos/1000/80" + props.index + ")"}}>
                
            </section>
            <section className="card-infos">
                <h3>Product name: {props.name}</h3>
                <p>Price: {props.price}</p>
                <p>Sizes: 
                    <span className="card-size">{props.size}</span> 
                    {/* <span className="card-size">34</span>
                    <span className="card-size">36</span>
                    <span className="card-size">38</span>
                    <span className="card-size">40</span> */}
                    </p>
            </section>
            <section className="card-handler">
                <span className="card-handlerPlus" onClick={props.plus}>+</span>
                <span className="card-handlerQQT">qqt: {props.qqt}</span>
                <span className="card-handlerMinus" onClick={props.minus}>-</span>
            </section>
        </div>
    )
}

export default item;