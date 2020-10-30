import React from "react";
import Item from "./Item/Item";
import "./Items.scss"

const items = (props) => {
    const products = [...props.products];
    const productsOutput = products.map((prod, index) => {
        return <Item key={prod.name} 
                     price={prod.Price} 
                     size={prod.Sizes} 
                     name={prod.name} 
                     index={index} 
                     qqt={props.qqt[index]}
                     plus={() => props.plus(index)}
                     minus={() => props.minus(index)}/>
    })
    return (
        <div className="output-containers">
            {productsOutput}
        </div>
    )
}

export default items