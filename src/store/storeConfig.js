import {combineReducers, createStore, applyMiddleware } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk'


export default () =>{
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
};

