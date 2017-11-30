import database from '../firebase/firebase';

//Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt};

        database.ref('expenses').push(expense);
    }
};

//Remove Expense
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id}={}) => {
    return (dispatch) => {
        database.ref(`expenses`).child(id).remove().then(()=>{
            dispatch(removeExpense(id));
        });
    }
}

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startUpdateExpense = (id,updates) => {
    return (dispatch)=>{
        database.ref('expenses').child(id).update(updates).then(()=>{
            dispatch(editExpense(id,updates));
        })
    }
}

//Set Expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
});

export const startSetExpense = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = [];
            snapshot.forEach((dataSnapshot)=>{
                expenses.push({
                    id: dataSnapshot.key,
                    ...dataSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};

