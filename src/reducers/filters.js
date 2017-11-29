import moment from 'moment';

const filterReducerdefault = {
    sortBy: 'date',
    text: '',
    startBy: moment().startOf('month'),
    endBy: moment().endOf('month')
};

export default (state = filterReducerdefault, action) => {
    switch(action.type){
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'TEXT':
            return {
                ...state,
                text: action.text
            };

        case 'START_DATE':
            return {
                ...state,
                startBy: action.date
            };

        case 'END_DATE':
            return {
                ...state,
                endBy: action.date
            };

        default:
            return state;
    }
};