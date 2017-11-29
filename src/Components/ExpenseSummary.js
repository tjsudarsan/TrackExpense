import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpense from '../selectors/getVisibleExpense';
import expenseTotal from '../selectors/expenseTotal';

const ExpenseSummary = ({expensesTotal , expensesCount}) => {
    const word = expensesCount === 1 ? 'expense' : 'expenses'; 
    return (
        <div>
            <h1>{`Listing ${expensesCount} ${word} totalling ₹ ${expensesTotal/100} /-`}</h1>
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