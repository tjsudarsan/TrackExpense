import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/getVisibleExpense';
import ExpenseListFilter from './ExpenseListFilter';


const ExpenseList = (props) => {
    return (
        <div>
            <ExpenseListFilter />
            <ol className="list-group itemslist">
                <li Style="font-weight:bold; text-decoration: underline; background-color: rgba(0,0,0,0.08);" className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col-md-2 col-xs-12">
                            Date
                        </div>
                        <div className="col-md-2 col-xs-12">
                           Description
                        </div>
                        <div className="col-md-6 col-xs-12">
                            Note
                        </div>
                        <div className="col-md-2 col-xs-12" Style="text-align: right;">
                            Amount
                        </div>
                    </div>
                </li>
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