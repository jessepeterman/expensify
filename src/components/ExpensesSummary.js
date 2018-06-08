import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const itemWord = props.expenses.length > 1 || props.expenses.length < 1 ? 'items' : 'item';
  const formattedExpensesTotal = numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Your total for <span>{props.expenses.length}</span> {itemWord} is: <span>{formattedExpensesTotal}</span></h1>
          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
      </div>
    </div>
  );
}

// numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpensesSummary); 