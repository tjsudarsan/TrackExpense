import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {startAddExpense} from '../actions/expenses';

class AddExpense extends Component {
  render() {
    const pathurl = process.env.PUBLIC_URL + '/dashboard';
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={(expense)=>{
            this.props.dispatch(startAddExpense(expense));
            this.props.history.push(pathurl);
          }}

        />
      </div>
    );
  }
}

export default connect()(AddExpense);
