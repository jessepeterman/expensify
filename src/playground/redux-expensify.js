import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = (
  {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id
  }
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id, 
  updates
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
  switch(action.type){
    case "ADD_EXPENSE":
    return [
      ...state, 
      action.expense];
      case "REMOVE_EXPENSE":
      return state.filter((expense) => {
        console.log(expense.id);
        return expense.id !== action.expense.id
      });
      case "EDIT_EXPENSE":
      return state.map((expense) =>{
        if (expense.id === action.id){
          return {
            ...expense, 
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
    return state;
  }
};


const filterReducerDefaultState = {
  text: "", 
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){ 
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
    return {
      ...state,
      sortBy: 'amount'
    }
    case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
    return state;
  }
};


// January 1st 1970 (unix epoch)
// use of timesatmps creates time zone independent time data

// get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1: -1;
    } else if(sortBy === 'amount'){ // sort by highest items first
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));

// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('coffee'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// console.log(store.getState());


// store.dispatch(setStartDate(-2000));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(500));

// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'poijasdf',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

// const user = {
//   name: "Jen", 
//   age: 24,
//   place: "San Francisco"
// }

// console.log({
//   ...user, 
//   age: 25
// })