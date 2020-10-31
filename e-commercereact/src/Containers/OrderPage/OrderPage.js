import React, { Component } from "react";
import Coupon from "../../Components/Coupon/Coupon";
import Items from "../../Components/Items/Items";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Modal from "../../Components/UI/Modal/Modal";


import axios from "../../axios-orders";

class OrderPage extends Component {
    state = {
        products: null,
        loading: true,
        qqt: [0, 0, 0, 0, 0, 0],
        numberOfItems: 0,
        showModal: true,

        orderedProducts: {
            Jeans: 0,
            Pull: 0,
            Shirt: 0,
            Sneakers: 0,
            Socks: 0,
            Tshirt: 0
        }
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
            });
    }

    totalHandler = (arg) => {
        const currentState = [...this.state.qqt];
        let quantity = 0
        if(arg==="plus") {
            quantity = 1;
        } else {
            quantity = -1
        }
        for(let i = 0; i < currentState.length; i++) {
            quantity += currentState[i];
        }
        this.setState({numberOfItems: quantity});
        if(quantity === -1) {
            quantity = 0;
        }
        this.props.data.changeValue(quantity);
    }

    plusHandler = (index) => {
        const prevState = [...this.state.qqt];
        prevState[index] += 1;
        // const currentState = [...this.state.qqt];
        // let quantity = 1;
        // for(let i = 0; i < currentState.length; i++) {
        //     quantity += currentState[i]
        // }
        this.totalHandler("plus");
        this.setState({qqt: prevState});
    }

    minusHandler = (index) => {
        if(this.state.qqt[index] !== 0) {
            const prevState = [...this.state.qqt];
            prevState[index] -= 1;
            this.setState({qqt: prevState})
        }

        this.totalHandler("minus")
    }

    modalCloseHandler = () => {
        this.setState({showModal: false})
    }

    modalOpenHandler = () => {
        this.setState({showModal: true});
        this.orderHandler()
    }

    orderHandler = () => {
        const products = ["Jeans", "Pull", "Shirt", "Sneakers", "Socks", "Tshirt"]
        const quantity = [...this.state.qqt]
        const remainingProducts = {}
        for(let i = 0; i < products.length; i++){
            remainingProducts[products[i]] = quantity[i];
        }

        this.setState({orderedProducts: remainingProducts})
    }

    render() {
        let products = "";
        if(this.state.products && this.state.qqt) {
            products = <Items products={this.state.products} 
                              loading={this.state.loading} 
                              qqt={this.state.qqt} 
                              plus={this.plusHandler}
                              minus={this.minusHandler}
                              number={this.state.numberOfItems}
                              click={this.modalOpenHandler}/>
        } else {
            products = <Spinner/>
        }
        return (
            <React.Fragment>
                <Modal show={this.state.showModal} click={this.modalCloseHandler} datas={this.state.orderedProducts} nbr={this.state.numberOfItems}/>
                <Coupon/>
                {products}
            </React.Fragment>
        )
    }
}

export default OrderPage;