import React, { Component } from "react";
import "./Checkout.scss";
import Button from "../../Components/UI/Button/Button";
import axios from "../../axios-orders";

class Checkout extends Component {
    state = {
        products: null,
        price: 0
    }

    componentWillMount() {
        let query = this.props.location.search;
        query = query.replace("?", "");
        query = query.split("&");
        let res=[]
        for(let i = 0; i < query.length; i++) {
            let a = query[i].split("=");
            res.push(a)
        }
        const obj = {};
        let price = 0
        for(let i = 0; i < res.length; i++){
            if(res[i][0] === "price") {
                price = res[i][1]
            } else {
                obj[res[i][0]] = res[i][1]
            }

        }
        this.setState({products: obj, price: price})
    }

    postDataHandler = () => {
        const data = {...this.state.products}
        data["price"] = this.state.price
        axios.post("/Orders.json", data)
            .then(res => {
                this.props.history.goBack()
            })
            .catch(err => {
                console.log(err)
            })
    }
    render () {

        const products = Object.keys(this.state.products)
        .map(prdKey => {
            if(this.state.products[prdKey] !== 0) {
                return <li key={prdKey}>{prdKey} : {this.state.products[prdKey]}</li>
            }
            
        })
        const prce = this.state.price;
        return (
            <div className="Checkout-container">
                <h2>Your order :</h2>
                <ul>
                    {products}
                </ul>
                <p className="price">Price: {prce}$</p>
                <p>To continue, enter your infromations</p>
                <form>
                    <label>Your name</label>
                    <input type="text" placeholder="John Doe"></input>
                    <label>Your email</label>
                    <input type="text" placeholder="Exemple@exemple.com"></input>
                    <label>Your adress</label>
                    <input type="text" placeholder="Brussels"></input>
                </form>
                <div className="btn">
                    <Button click={this.postDataHandler}>Order</Button>
                    <Button type="Danger">Cancer</Button>
                </div>
            </div>
        )
    }
}

export default Checkout;