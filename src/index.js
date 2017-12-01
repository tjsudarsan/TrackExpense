import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter ,{history} from './router/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import LoadingPage from './Components/LoadingPage';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import {startSetExpense,editExpense,addExpense,removeExpense} from './actions/expenses';
import {firebase} from './firebase/firebase';
import database from './firebase/firebase';
import {login,logout} from './actions/auth';

const store = storeConfig();

const root = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(root,document.getElementById("root"));
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid,user.displayName));
        store.dispatch(startSetExpense()).then(()=>{
            renderApp();
            if(history.location.pathname === (process.env.PUBLIC_URL + '/')){
                history.push(process.env.PUBLIC_URL + '/dashboard');
            }  
        });
        
        const uid = user.uid;        
        database.ref(`users/${uid}/expenses`).on('child_changed',(snapshot)=>{
            store.dispatch(editExpense(snapshot.key.toString(),snapshot.val()));
        });
        
        database.ref(`users/${uid}/expenses`).on('child_added',(snapshot)=>{
            store.dispatch(addExpense({
                id: snapshot.key,
                ...snapshot.val()
            }));
        });
        
        database.ref(`users/${uid}/expenses`).on('child_removed',(snapshot)=>{
            store.dispatch(removeExpense(snapshot.key.toString(),snapshot.val()));
        });
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push(process.env.PUBLIC_URL + '/');
    }
});


registerServiceWorker();
