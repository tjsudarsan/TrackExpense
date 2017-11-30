import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import {startSetExpense,setExpenses} from './actions/expenses';
import './firebase/firebase';
import database from './firebase/firebase';

const store = storeConfig();

const root = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

database.ref('expenses').on('value',(snapshot)=>{
    const expenseArray = [];
    snapshot.forEach((dataSnapshot)=>{
        expenseArray.push({
            id: dataSnapshot.key,
            ...dataSnapshot.val()
        });
    });
    store.dispatch(setExpenses(expenseArray));
});


ReactDOM.render(<p>Loading....</p>, document.getElementById('root'));

store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(root,document.getElementById("root"));
});


registerServiceWorker();
