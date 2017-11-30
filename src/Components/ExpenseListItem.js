import React from 'react';
import { startRemoveExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({id, description , amount , createdAt, dispatch}) => {
    const pathurl = process.env.PUBLIC_URL + `/editexpense/${id}`;
    return (
        <li>
            {description} &#8377; {numeral(amount/100).format('0,0.00')}/- Created on: {moment(createdAt).format('Do MMM YYYY')} - 
            <Link to={pathurl}>Edit</Link>
            <button onClick={()=>{ 
                dispatch(startRemoveExpense({ id }));
             }}>Remove</button> 
        </li>
    );
}

export default connect()(ExpenseListItem);