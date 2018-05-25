import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getExpensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummary = (props) => (
    <div>
        <h1>Total expenses</h1>
        {numeral(props.totalExpenses / 100).format('0,0[.]00 $')}
    </div>   
);

const mapStateProps = (state) => {
    return {
        totalExpenses: getExpensesTotal(selectExpenses(state.expenses, state.filters))
        
    };
};

export default connect(mapStateProps)(ExpensesSummary);