import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setText, sortByDate, sortByAmount, startDateFilter, endDateFilter } from '../actions/filters';

class ExpenseListFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            focused: null
        }
    }

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e)=>{
                        this.props.dispatch(setText(e.target.value))
                    }} 
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(e)=>{
                    e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
                    }} 
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select> 
                <DateRangePicker 
                    startDate={this.props.filters.startBy}
                    endDate={this.props.filters.endBy}
                    onDatesChange={({startDate , endDate}) => {
                        this.props.dispatch(startDateFilter(startDate));
                        this.props.dispatch(endDateFilter(endDate));
                    }}
                    focusedInput={this.state.focused}
                    onFocusChange={focusedInput => this.setState({focused: focusedInput})}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />       
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);