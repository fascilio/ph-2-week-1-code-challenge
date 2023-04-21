import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addTransaction } from "./api";

const AddTransactionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const response = await addTransaction(formData);
    onAdd(response);
    setFormData({
    date: "",
    description: "",
    category: "",
    amount: "",
    });
    } catch (error) {
    console.error(error);
    }
    };
    
    return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formDate">
    <Form.Label>Date</Form.Label>
    <Form.Control
    type="date"
    name="date"
    value={formData.date}
    onChange={handleInputChange}
    required
    />
    </Form.Group>
    <Form.Group controlId="formDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control
    type="text"
    name="description"
    value={formData.description}
    onChange={handleInputChange}
    required
    />
    </Form.Group>
    <Form.Group controlId="formCategory">
    <Form.Label>Category</Form.Label>
    <Form.Control
    type="text"
    name="category"
    value={formData.category}
    onChange={handleInputChange}
    required
    />
    </Form.Group>
    <Form.Group controlId="formAmount">
    <Form.Label>Amount</Form.Label>
    <Form.Control
    type="number"
    name="amount"
    value={formData.amount}
    onChange={handleInputChange}
    required
    />
    </Form.Group>
    <Button variant="primary" type="submit">
    Add Transaction
    </Button>
    </Form>
    );
    };
    
    export default AddTransactionForm;
