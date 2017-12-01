import React from 'react';
import {connect} from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import { startRemoveExpense, startUpdateExpense } from '../actions/expenses';
import '../css/editexpense.css';

const EditExpense = (props) => {
    const pathurl = process.env.PUBLIC_URL + '/dashboard';
    return (
      <div className="edit">
        <h1>Edit Expense</h1>
        
        <ExpenseFrom
          expense={props.expense}
          onSubmit={(updates) => {
            props.dispatch(startUpdateExpense(props.match.params.id, updates));
            props.history.push(pathurl);
          }}
        />
        
        <p>
          <button className="btn btn-danger rmv" onClick={()=>{ 
              props.dispatch(startRemoveExpense({ id: props.match.params.id }));
              props.history.push(pathurl);
          }}>Remove Expense</button> 
        </p>
        <p><b>Note: </b>Removing expense won't ask for any Confirmation. It will simply delete it and cannot be retrived.</p>
       
      </div>
    );
}

const mapStateToProps = (state,props) => {
  return {
    expense: state.expenses.find((expense)=> expense.id === props.match.params.id) 
  };
};

export default connect(mapStateToProps)(EditExpense);
