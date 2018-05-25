import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getExpensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummary = ({expenseCount, totalExpenses}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    
    return (
        <div>
            <h1>Total expenses</h1>
            {`Viewing ${expenseCount} ${expenseWord}, Totalling `}
            {numeral(totalExpenses / 100).format('0,0[.]00 $')}
        </div>  
    );
 
};

const mapStateProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        totalExpenses: getExpensesTotal(selectExpenses(state.expenses, state.filters))
        
    };
};

export default connect(mapStateProps)(ExpensesSummary);