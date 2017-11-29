import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>TrackExpense</h1>
                <ul>
                    <li><NavLink activeStyle={{color: 'red',fontweight: 'bold'}} to="/" exact={true}>DashBoard</NavLink></li>
                    <li><NavLink activeStyle={{color: 'red',fontweight: 'bold'}} to="/addexpense">Add Expense</NavLink></li>
                </ul>
            </header>
        );
    }
}