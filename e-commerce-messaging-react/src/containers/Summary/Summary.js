import React from 'react';
import "./Summary.scss";
import "../../components/Products/Products"
import Products from "../../components/Products/Products";
const summary = (props) => {
    const products = props.data.map((prod, index) => {
        return <Products 
                key={index} 
                data={prod.currentAmount} 
                name={prod.name} 
                good={prod.sign} />
    })
    return (
        <div className="summary__container">
            <div className="summary__produtsContainer">
                <h4>Summary of products</h4>
                <div className="summary__productsI">
                    {products}
                </div>
                <a href="/">Go the the products page</a>
            </div>
            <div className="summary__graphContainer">
                <h4>Summary of KPIs</h4>
                <img src="https://picsum.photos/200/200" alt=""></img>
                
            </div>
        </div>
    );
};

export default summary;