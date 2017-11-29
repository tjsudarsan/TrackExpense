//set text filter
export const setText = (text = '') => ({
    type: 'TEXT',
    text
});

//sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//Sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//start date
export const startDateFilter = (date) => ({
    type: "START_DATE",
    date
});

export const endDateFilter = (date) => ({
    type: "END_DATE",
    date
});


