import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions , setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.log(err));
  }, []);

  const addTransaction = (transaction) => {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
      .then(res => res.json())
      .then(data => setTransactions([...transactions, data]))
      .catch(err => console.log(err));
  }

  const deleteTransaction = (id) => {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: 'DELETE'
    })
      .then(() => setTransactions(transactions.filter(transaction => transaction.id !== id)))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="bank-name">The Royal Bank of Flatiron</h1>
      <SearchBar transactions={transactions} setTransactions={setTransactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;