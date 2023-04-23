// import React, { useState, useEffect } from "react";
// import Home from "./Home";
// import { Container, Row, Col } from "react-bootstrap";
// import TransactionList from "./TransactionList";
// import AddTransactionForm from "./AddTransactionForm";
// import { getTransactions } from "./Api";

// const App = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [filteredTransactions, setFilteredTransactions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await getTransactions();
//         setTransactions(response);
//         setFilteredTransactions(response);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   const handleAddTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
//     setFilteredTransactions([...filteredTransactions, transaction]);
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     const filtered = transactions.filter((transaction) =>
//       transaction.description.toLowerCase().includes(event.target.value.toLowerCase())
//     );
//     setFilteredTransactions(filtered);
//   };

//   return (
//     <Container className="my-5">
//       <Row>
//         <Col>
//           <h1 className="text-center">Bank Transactions</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <AddTransactionForm onAdd={handleAddTransaction} />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <input
//             type="text"
//             className="form-control mb-3"
//             placeholder="Search transactions..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <TransactionList transactions={filteredTransactions} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Home from "./Home";
import TransactionList from "./TransactionList";
import AddTransactionForm from "./AddTransactionForm";
import { getTransactions } from "./Api";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactions();
        setTransactions(response);
        setFilteredTransactions(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, []);

  const handleAddTransaction = (transaction) => {
    setTransactions((transactions) => [...transactions, transaction]);
    setFilteredTransactions((filteredTransactions) => [...filteredTransactions, transaction]);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm)
    );

    setFilteredTransactions(filtered);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center">Bank Transactions</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTransactionForm onAdd={handleAddTransaction} />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <TransactionList transactions={filteredTransactions} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
