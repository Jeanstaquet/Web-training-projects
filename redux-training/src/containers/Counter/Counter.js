import React, { Component, useState } from 'react';
import {connect} from "react-redux"
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {
    const [counter, setCounter] = useState(0)

    const counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                setCounter( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                setCounter( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                setCounter( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                setCounter( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                return
        }
    }


        return (
            <div>
                <CounterOutput value={props.ctr} />
                <CounterControl label="Increment" clicked={props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={props.onSubstractCounter}  />
                <hr/>
                <button>Store Result</button>
                <ul>
                    <li></li>
                </ul>
            </div>
        );
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

//l'arg call le dispatch du store behind the scene
//va tenir une référence vers une fonction
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: "INCREMENT"}),
        onDecrementCounter: () => dispatch({type: "DECREMENT"}),
        onAddCounter: () => dispatch({type: "ADD", val: 11}),
        onSubstractCounter: () => dispatch({type: "SUBSTRACT", val: 15}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);