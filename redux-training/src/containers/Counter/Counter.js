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
                <CounterControl label="Decrement" clicked={() => counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => counterChangedHandler( 'sub', 5 )}  />
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);