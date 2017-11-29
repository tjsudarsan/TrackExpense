import React from 'react';
import {connect} from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpense = (props) => {
    const pathurl = process.env.PUBLIC_URL + '/';
    return (
      <div>
        <h1>Edit Expense</h1>
        
        <ExpenseFrom
          expense={props.expense}
          onSubmit={(updates) => {
            props.dispatch(editExpense(props.match.params.id, updates));
            props.history.push(pathurl);
          }}
        />
      </div>
    );
}

const mapStateToProps = (state,props) => {
  return {
    expense: state.expenses.find((expense)=> expense.id === props.match.params.id) 
  };
};

export default connect(mapStateToProps)(EditExpense);