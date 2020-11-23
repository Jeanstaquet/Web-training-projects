import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

//Middleware
const logger = store => {
    return next => {
        return action => {
            console.log("Middleware dispatching", action)
            //Permet à l'action de continuer
            const result = next(action);
            //va renvoyer l'updated state
            console.log("Middleware, next state", store.getState())
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
