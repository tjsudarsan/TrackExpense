import React from 'react';
import {NavLink} from 'react-router-dom';
import {logoutAuth} from '../actions/auth';
import {connect} from 'react-redux';
import '../css/header.css';

export class Header extends React.Component{
    render(){
        return(
            <div className="row align-items-center header">
                <div className="col-md-3 col-xs-12"><h1>₹ Track<span><b>Expense</b></span>.00/-</h1></div>
                <div className="col-md-5 col-xs-12 links">
                    <ul>
                        <li><NavLink className="link" activeStyle={{textDecoration: 'underline', color: 'red'}} to={process.env.PUBLIC_URL + '/dashboard'} exact={true}>DashBoard</NavLink></li>
                        <li><NavLink className="link" activeStyle={{textDecoration: 'underline', color: 'red'}} to={process.env.PUBLIC_URL + '/addexpense'}>Add Expense</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-4 col-xs-12 user">
                    <span>Welcome <b>{this.props.username}</b></span>
                    <button className="btn btn-outline-danger" onClick={this.props.logout}>Logout</button>
                </div>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAuth())
    }
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.name
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);