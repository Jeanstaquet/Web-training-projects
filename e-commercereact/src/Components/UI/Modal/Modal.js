import React from "react";
import Button from "../Button/Button";
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
    const products = Object.keys(props.datas)
        .map(prdKey => {
            if(props.datas[prdKey] !== 0) {
                return <li key={prdKey}>{prdKey} : {props.datas[prdKey]}</li>
            }
            
        })
    return (
        <React.Fragment>
        <Backdrop show={props.show} click={props.click}/>
        <div className="container-modal" style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
            <h4>You selected {props.nbr} items:</h4>
            <ul>
                {products}
            </ul>
            <p>Total Price: {props.totalPrice}$</p>
            <div>
                <Button click={props.continue}>Order!</Button>
                <Button type="Danger" click={props.click}>Cancel</Button>
            </div>
            <span onClick={props.click}>x</span>
        </div>
    </React.Fragment>
    )

};

export default modal;