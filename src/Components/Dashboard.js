import React, { Component } from 'react';
import ExpenseList from './ExpenseList';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>This is trackexpense</p>
        <ExpenseList/>
      </div>
    );
  }
}
