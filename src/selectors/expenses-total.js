import React from 'react';
import numeral from 'numeral';

export default (expenses) => {

  let totalArray = 0;
  let total = 0;
  totalArray = expenses.map((expense) => expense.amount);
  // const total = expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount);
  
  if (totalArray.length >= 1){
    total = totalArray.reduce((acc, current) => acc + current);
  }
  return total;
  // numeral(total / 100).format('$0,0.00');
}
