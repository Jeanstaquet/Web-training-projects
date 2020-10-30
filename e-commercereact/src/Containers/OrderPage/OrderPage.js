import React, { Component } from "react";
import Coupon from "../../Components/Coupon/Coupon"
import Items from "../../Components/Items/Items"
import axios from "../../axios-orders";

class OrderPage extends Component {
    state = {
        products: null,
        loading: true,
        qqt: [0, 0, 0, 0, 0, 0]
    }

    componentDidMount() {
        axios.get("/Products.json")
            .then(res => {
                const fetchedProducts = [];
                for(let key in res.data) {
                    fetchedProducts.push({...res.data[key], name: key})
                }
                this.setState({products: fetchedProducts, loading: false})
            })
            .catch(err => {
                console.log(err)
            })
    }

    plusHandler = (index) => {
        const prevState = [...this.state.qqt];
        prevState[index] += 1;
        this.setState({qqt: prevState})
    }

    minusHandler = (index) => {
        if(this.state.qqt[index] !== 0) {
            const prevState = [...this.state.qqt];
            prevState[index] -= 1;
            this.setState({qqt: prevState})
        }
    }

    render() {
        let products = "";

        if(this.state.products) {
            products = <Items products={this.state.products} 
                              loading={this.state.loading} 
                              qqt={this.state.qqt} 
                              plus={this.plusHandler}
                              minus={this.minusHandler}/>
        }
        return (
            <React.Fragment>
                <Coupon/>
                {products}
            </React.Fragment>
        )
    }
}

export default OrderPage;