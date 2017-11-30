import React from 'react';
import {connect} from "react-redux";
import {startAuth} from '../actions/auth';

const LoginPage = ({startAuth}) => {
    return (
        <div>
            <button onClick={startAuth}>Login</button>
        </div>
    );
}

const mapDispathToProps = (dispatch) => {
    return {
        startAuth: () => dispatch(startAuth())
    }
};

export default connect(undefined, mapDispathToProps)(LoginPage);