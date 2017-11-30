import React from 'react';
import {connect} from "react-redux";
import {startAuth} from '../actions/auth';
import '../css/loginpage.css';
import glogo from './assests/gicon.svg';

const LoginPage = ({startAuth}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12  sectionbox">
                    <h1>₹ Track<span><b>Expense</b></span>.00/-</h1>
                    <h4>Your Expenses at single place. Access it from anywhere and at anytime.</h4>
                    <button className="btn loginbtn" onClick={startAuth}><span className="gicon"><img src={glogo} /></span>Login With Google</button>
                </div>
            </div>
        </div>
    );
}

const mapDispathToProps = (dispatch) => {
    return {
        startAuth: () => dispatch(startAuth())
    }
};

export default connect(undefined, mapDispathToProps)(LoginPage);