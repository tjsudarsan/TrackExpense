import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import { addExpense } from './actions/expenses';
//import { setText , sortByDate, sortByAmount } from './actions/filters';

const store = storeConfig();

store.dispatch(addExpense({description: 'water bill', amount: 100, createdAt: 2000}));
store.dispatch(addExpense({description: 'gass bill', amount: 800, createdAt: 1000}));
store.dispatch(addExpense({description: 'travel expenses', amount: 500, createdAt: 1500}));
store.dispatch(addExpense({description: 'books', amount: 200, createdAt: 3000}));

const root = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
