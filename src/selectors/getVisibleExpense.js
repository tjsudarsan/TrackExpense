import moment from 'moment'

export default (expenses, {text, sortBy, startBy, endBy}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startBy ? startBy.isSameOrBefore(createdAtMoment,'day') : true;
        const endDateMatch = endBy ? endBy.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        var result;
        if(sortBy === "date"){
            result =  a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === "amount"){
            result =  a.amount < b.amount ? 1 : -1;
        }
        return result;
    });
};