import React, { useState } from 'react';
import {connect} from "react-redux"
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from "../../store/actions";

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
                <button onClick={() => props.onStoreResult(props.ctr)}>Store Result</button>
                <ul>
                    {props.storedResults.map(strRes => (
                    <li key={strRes.id} onClick={() => props.onDeleteResult(strRes.id)}>{strRes.value}</li>
                    ))}

                </ul>
            </div>
        );
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

//l'arg call le dispatch du store behind the scene
//va tenir une référence vers une fonction
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubstractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);