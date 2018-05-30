import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() =>{
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters
  filters={filters}
  setTextFilter={setTextFilter}
  sortByDate={sortByDate}
  sortByAmount={sortByAmount}
  setStartDate={setStartDate}
  setEndDate={setEndDate}
  />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters altFilters correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should hand text change', ()=> {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
    expect(setTextFilter).toHaveBeenLastCalledWith(value
  );
});

 test('should handle sort by date change', () => {
   const value = 'date';
   wrapper.find('select').simulate('change', {
     target: {value}
   });
     expect(sortByDate).toHaveBeenCalled();
 });

 test('should handle sort by amount change', () => {
   const value = 'amount';
   wrapper.find('select').simulate('change', {
     target: {value}
   });
     expect(sortByAmount).toHaveBeenCalled();
 });


 test('should handle sort by date change', () => {
   const startDate = moment(0).add(6, 'months');
   console.log(startDate);
   const endDate = moment(0).add(1, 'years');
   wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
 });

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})

