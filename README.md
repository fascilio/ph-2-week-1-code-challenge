# ph-2-week-1-code-challenge

## Code Structure
## App.js
This is the main component of the application that renders the other 
components. It uses the useState and useEffect hooks to manage state 
and handle API requests. The transactions state variable stores all 
the transactions fetched from the API, while the filteredTransactions 
state variable is used to store the transactions that match the 
search term entered by the user. The searchTerm state variable stores 
the search term entered by the user.

The useEffect hook is used to fetch the transactions from the API 
when the component mounts. The handleAddTransaction function is used 
to add a new transaction to the transactions and filteredTransactions 
state variables. The handleSearch function is used to filter the 
transactions based on the search term entered by the user.

## Api.js
This file contains two functions: getTransactions and addTransaction. 
These functions are used to fetch transactions from the API and add 
new transactions to the API, respectively. The axios library is used 
to make HTTP requests to the API.

## TransactionList.js
This component is used to render the list of transactions. It 
receives the filteredTransactions state variable as a prop and maps 
over it to create a table row for each transaction.

## AddTransactionForm.js
This component is used to render the form for adding a new 
transaction. It uses the useState hook to manage form data and the 
addTransaction function from the Api.js file to add the new transaction to the API.

## Home.js
This component is a simple header that is displayed at the top of the page.

## Rendering
The application renders a table of transactions that can be searched 
by description. Users can add new transactions using the form at the 
top of the page. The home page displays a simple header with the name of the bank.