import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should test expenses total when given 0 expenses', () => {
  const expensesEmpty = [];
  const result = selectExpensesTotal(expensesEmpty);
  expect(result).toEqual(0);
});

test('should test expenses total when given an array of expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(199695);
});

test('should test expenses total when given an array of expenses', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(195);
});