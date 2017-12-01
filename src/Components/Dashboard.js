import React, { Component } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpenseSummary';
import '../css/dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="exp">Expenses</h1>
        <ExpensesSummary/>
        <ExpenseList/>
      </div>      
    );
  }
};
