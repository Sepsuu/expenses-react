import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup removeExpense action object', () => {
    const action = removeExpense({id: '123asd'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asd'
    });
});

test('Should setup editExpense action object', () => {
    const action = editExpense('123asd', {note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asd',
        updates: {
            note: 'new note value'
        }
    });
});

test('Should setup addExpense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('Should setup the addExpense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});