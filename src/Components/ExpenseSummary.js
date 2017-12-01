import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpense from '../selectors/getVisibleExpense';
import expenseTotal from '../selectors/expenseTotal';
import numeral from 'numeral';
import '../css/dashboard.css';

const ExpenseSummary = ({expensesTotal , expensesCount}) => {
    const word = expensesCount <= 1 ? 'expense' : 'expenses'; 
    return (
        <div className="row summary">
            <div className="col-md-12">
                <h3>Listing <b>{`${expensesCount}`}</b>{` ${word} totalling `}<b>{`₹ ${numeral(expensesTotal/100).format('0,0.00')}`}</b></h3>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const filteredExpense = getVisibleExpense(state.expenses, state.filters);
    return {
        expensesTotal: expenseTotal(filteredExpense),
        expensesCount: filteredExpense.length 
    }
}

export default connect(mapStateToProps)(ExpenseSummary);