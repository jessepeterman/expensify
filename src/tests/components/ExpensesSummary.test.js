import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

const expenseList = [{
  id: '1',
  description: 'gum',
  note: '',
  amount: 9434,
  createdAt: 0
}, {
  id: '2',
  description: 'other half',
  note: '',
  amount: 4717,
  createdAt: 100
  }, {
    id: '3',
    description: 'Half',
    note: '',
    amount: 4717,
    createdAt: 100
  }];

test('should render expense summary with', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenseList} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense summary with', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenseList[0]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense summary with', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenseList[1], expenseList[2]]}/>);
  expect(wrapper).toMatchSnapshot();
});