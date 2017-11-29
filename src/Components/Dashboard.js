import React, { Component } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpenseSummary';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Expenses</h1>
        <ExpensesSummary/>
        <ExpenseList/>
      </div>
    );
  }
}
