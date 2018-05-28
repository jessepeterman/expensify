import React from 'react';
import {Link} from 'react-router-dom';

// pass in the prop.expense and destructure the object to be used inside expenseListItem
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>Amount: ${amount}  Created on: {createdAt}</p>
  </div>
);


export default ExpenseListItem;
