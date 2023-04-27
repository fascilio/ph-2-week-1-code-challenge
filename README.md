# ph-2-week-1-code-challenge
This is a simple React application for managing transactions. It
allows users to view, add, and delete transactions.

## Getting Started
Clone the repository
Install dependencies by running `npm install`
Start the development server by running `npm start`
start the server bu running `json-server --watch src/db.json --port 8001`

## Features

## Transaction Table
The TransactionTable component displays a table of all transactions. It shows the date, description, category, and amount of each transaction. The component also includes a "Delete" button for each transaction that allows users to delete individual transactions.

## Transaction Form
The TransactionForm component allows users to add new transactions to the list. It includes form inputs for the date, description, category, and amount of the transaction.

## Search Bar
The SearchBar component allows users to search for transactions by keyword. It filters the transaction list based on the search query and updates the TransactionTable component with the filtered results.

## API Integration
This application uses an API to fetch and update transaction data. The App component fetches the initial transaction data when the page loads and sends requests to the API to add or delete transactions.

## Conclusion
This React application provides a simple solution for managing transactions. It includes basic features such as adding, deleting, and searching transactions. With some additional modifications and improvements, it could be extended to become a more powerful transaction management tool.