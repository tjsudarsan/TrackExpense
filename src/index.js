import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import {startSetExpense,editExpense,addExpense,removeExpense} from './actions/expenses';
import './firebase/firebase';
import database from './firebase/firebase';

const store = storeConfig();

const root = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

database.ref('expenses').on('child_changed',(snapshot)=>{
    store.dispatch(editExpense(snapshot.key.toString(),snapshot.val()));
});

database.ref('expenses').on('child_added',(snapshot)=>{
    store.dispatch(addExpense({
        id: snapshot.key,
        ...snapshot.val()
    }));
});

database.ref('expenses').on('child_removed',(snapshot)=>{
    store.dispatch(removeExpense(snapshot.key.toString(),snapshot.val()));
});

ReactDOM.render(<p>Loading....</p>, document.getElementById('root'));

store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(root,document.getElementById("root"));
});


registerServiceWorker();
