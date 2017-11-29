import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
 

const ExpenseListItem = ({id, description , amount , createdAt, dispatch}) => (
    <li>
        {description} &#8377; {amount/100}/- Created on: {moment(createdAt).format('Do MMM YYYY')} - 
        <Link to={`/editexpense/${id}`}>Edit</Link>
        <button onClick={()=>{ 
            dispatch(removeExpense({ id }));
         }}>Remove</button> 
    </li>
);

export default connect()(ExpenseListItem);