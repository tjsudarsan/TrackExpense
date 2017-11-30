import React from 'react';
import {NavLink} from 'react-router-dom';
import {logoutAuth} from '../actions/auth';
import {connect} from 'react-redux';

export class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>TrackExpense</h1>
                <ul>
                    <li><NavLink activeStyle={{color: 'red',fontweight: 'bold'}} to={process.env.PUBLIC_URL + '/dashboard'} exact={true}>DashBoard</NavLink></li>
                    <li><NavLink activeStyle={{color: 'red',fontweight: 'bold'}} to={process.env.PUBLIC_URL + '/addexpense'}>Add Expense</NavLink></li>
                </ul>
                <button onClick={this.props.logout}>Logout</button>
            </header>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAuth())
    }
};

export default connect(undefined, mapDispatchToProps)(Header);