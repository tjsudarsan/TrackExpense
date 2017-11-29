import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpense from '../selectors/getVisibleExpense';
import expenseTotal from '../selectors/expenseTotal';
import numeral from 'numeral';

const ExpenseSummary = ({expensesTotal , expensesCount}) => {
    const word = expensesCount === 1 ? 'expense' : 'expenses'; 
    return (
        <div>
            <h1>{`Listing ${expensesCount} ${word} totalling ₹ ${numeral(expensesTotal/100).format('0,0.00')}/-`}</h1>
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