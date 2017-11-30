import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../Components/Dashboard';
import AddExpense from '../Components/AddExpense';
import EditExpense from '../Components/EditExpense';
import NotFound from '../Components/NotFound';
import LoginPage from '../Components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const Home = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path={process.env.PUBLIC_URL + '/'} component={LoginPage} exact={true} />   
                <PrivateRoute path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard} />
                <PrivateRoute path={process.env.PUBLIC_URL + '/addexpense'} component={AddExpense} />
                <PrivateRoute path={process.env.PUBLIC_URL + '/editexpense/:id'} component={EditExpense} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default Home;