import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [transaction, setTransaction] = useState({ date: '', description: '', category: '', amount: '' });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction);
    setTransaction({ date: '', description: '', category: '', amount: '' });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={transaction.date} onChange={handleChange} />
        <label>Description:</label>
        <input type="text" name="description" value={transaction.description} onChange={handleChange} />
        <label>Category:</label>
        <input type="text" name="category" value={transaction.category} onChange={handleChange} />
        <label>Amount:</label>
        <input type="number" name="amount" value={transaction.amount} onChange={handleChange} />
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button type="submit" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}

export default TransactionForm;
