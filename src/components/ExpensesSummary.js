import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem';
import getExpensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummary = ({expenseCount, totalExpenses}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord}, Totalling <span>{numeral(totalExpenses / 100).format('0,0[.]00 $')}</span>
                </h1>
                <div className="page-header__action">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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