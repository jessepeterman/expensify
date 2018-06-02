import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {

  return (
    <p><strong>Your total for {props.expenses.length} item(s) is: {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</strong></p>
  );
}

// numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpensesSummary); 