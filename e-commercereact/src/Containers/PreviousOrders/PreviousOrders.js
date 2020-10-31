import React, { Component } from "react";
import "./PreviousOrders.scss";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
class PreviousOrders extends Component {
    state={
        previousOrders: null,
        loading: true
    }

    componentDidMount() {
        axios.get("https://react-burger-app-ffe1a.firebaseio.com/Orders.json")
            .then(res => {
                const orders = [];

                for(let key in res.data) {
                    orders.push({...res.data[key]})
                }
                this.setState({previousOrders: orders, loading: false})
            })
    }
    render () {
        let ords = <Spinner/>
        if(this.state.previousOrders !== null) { 
            ords = this.state.previousOrders.map((item, index) => {
            return <li key={index}>{item.Jeans ? item.Jeans : null}, Price: {item.price}$</li>
             
            })

        }
        return (
            <div>
                <ul>
                    {ords}
                </ul>
            </div>
        )
    }
};

export default PreviousOrders;