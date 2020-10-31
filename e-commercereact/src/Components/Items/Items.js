import React from "react";
import Item from "./Item/Item";
import "./Items.scss";
import Button from "../UI/Button/Button";

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
        <React.Fragment>
            <div className="output-containers">
                {productsOutput}
            </div>
            <div className="output-button">
                <Button click={props.click}>Order ({props.number})</Button>
                <Button type="Danger">Cancel</Button>
            </div>
        </React.Fragment>
    )
}

export default items