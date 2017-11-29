import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            note: props.expense ? props.expense.note : '',
            date: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: undefined
        }

        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeNote = this.handleChangeNote.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeDescription (e) {
        this.setState({description: e.target.value});
    }

    handleChangeAmount(e) {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,9}(\.\d{0,2})?$/)){
            this.setState({amount});
        }
    }

    handleChangeNote(e) {
        this.setState({note: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        
        if(this.state.description && this.state.amount){
            this.setState({error: undefined});
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.date.valueOf(),
                note: this.state.note
            });
        }else{
            this.setState({error: 'Enter Description and Amount'});
        }

    }
    render(props){
        return(
            <form onSubmit={this.handleSubmit}>
                
                {this.state.error ? <p>{this.state.error}</p> : <p></p> }

                <SingleDatePicker
                date={this.state.date}
                onDateChange={date => this.setState({date})}
                focused={this.state.focused}
                onFocusChange={({focused}) => this.setState({focused})}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
                    
                <input
                    type="text"
                    value={this.state.description}
                    placeholder="Description"
                    onChange={this.handleChangeDescription}
                />

                <input
                    type="text"
                    value={this.state.amount}
                    placeholder="Amount"
                    onChange={this.handleChangeAmount}
                />

                <textarea
                    placeholder="Enter note"
                    value={this.state.note}
                    onChange={this.handleChangeNote}
                ></textarea>

                <button
                    type="button"
                    onClick={this.handleSubmit}
                >{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
            </form>
        );
    }
}