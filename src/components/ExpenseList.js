import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
      <h1>Expense List</h1>
    {
      props.expenses.map((expense) => (
      
      <ExpenseListItem 
        key={expense.id}
        // send entire expense from the map, to the expenselistitem component prop argument
        {...expense}
        />
    ))
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);