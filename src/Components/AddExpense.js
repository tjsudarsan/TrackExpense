import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses';

class AddExpense extends Component {
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={(expense)=>{
            this.props.dispatch(addExpense(expense));
            this.props.history.push('/');
          }}

        />
      </div>
    );
  }
}

export default connect()(AddExpense);
