import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import '../css/dashboard.css';


const ExpenseListItem = ({id, description , amount , createdAt, note, dispatch}) => {
    const pathurl = process.env.PUBLIC_URL + `/editexpense/${id}`;
    return (
        
        <Link className="items" to={pathurl}>
            <li Style="margin: 0px;" className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-md-2 col-xs-12 ">
                        {moment(createdAt).format('Do MMM YYYY')}
                    </div>
                    <div className="col-md-2 col-xs-12">
                        {description.toString()}
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {note.toString()}
                    </div>
                    <div className="col-md-2 col-xs-12" Style="text-align: right;">
                        ₹ {numeral(amount/100).format('0,0.00')}
                    </div>
                </div>
            </li>
        </Link>
    );
}

export default connect()(ExpenseListItem);