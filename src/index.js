import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

const store = storeConfig();

const root = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
