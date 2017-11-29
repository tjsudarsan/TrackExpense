import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/getVisibleExpense';
import ExpenseListFilter from './ExpenseListFilter';


const ExpenseList = (props) => {
    return (
        <div>
            <ExpenseListFilter />
            <h2>Expense list</h2>
            <ol>
                {props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))}
            </ol>
        </div>
    );
}

const mapStateToProps =(state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);