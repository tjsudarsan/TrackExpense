import React from 'react';
import moment from 'moment';
import '../css/footer.css';

export const Footer = () => {
    const year = moment().format("YYYY");
    return (
        <div className="row">
            <div className="col-md-12">
                <p id="footer">{year} © Track<b>Expense</b> - Developed by <a href="https://tjsudarsan.github.io">Sudarsan T J</a></p>
            </div>
        </div>
    );
}