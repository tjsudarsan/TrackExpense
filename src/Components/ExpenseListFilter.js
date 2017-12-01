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
            <div className="row align-items-center filter">
                <div className="col-md-12 col-xs-12">
                    <p className="filtertext">Filter:</p>
                </div>
                <div className="col-md-6 col-xs-12 col-lg-6">
                    <input 
                        type="text"
                        className="form-control filteritems"
                        placeholder="Search your Expenses"
                        value={this.props.filters.text} 
                        onChange={(e)=>{
                            this.props.dispatch(setText(e.target.value))
                        }} 
                    />
                </div>

                <div className="col-md-2 col-xs-12 col-lg-2">
                    <select 
                        className="form-control filteritems"
                        value={this.props.filters.sortBy} 
                        onChange={(e)=>{
                        e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
                        }} 
                    >
                        <option value="date">Sort By Date</option>
                        <option value="amount">Sort By Amount</option>
                    </select>
                </div>
                 
                <div className="col-md-4 col-xs-12 col-lg-4">
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