import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import AddExpense from '../Components/AddExpense';
import EditExpense from '../Components/EditExpense';
import Header from '../Components/Header';
import NotFound from '../Components/NotFound';

export default class Home extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                        <Switch>
                            <Route path="/" component={Dashboard} exact={true} />
                            <Route path="/addexpense" component={AddExpense} />
                            <Route path="/editexpense/:id" component={EditExpense} />
                            <Route component={NotFound} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    }
}