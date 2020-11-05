import React, { Component } from 'react';
import "./Details.scss"
class Details extends Component {
    state={component: null}

    componentWillMount() {
        let query = this.props.history.location.pathname;
        console.log(query);
        this.setState({component: query})
        
    }

    goBackHandler = () => {
        this.props.history.goBack()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Here is your data for: {this.state.component}</h2>
                <button onClick={this.goBackHandler}>Go back</button>
            </div>
        );
    }
}

export default Details;