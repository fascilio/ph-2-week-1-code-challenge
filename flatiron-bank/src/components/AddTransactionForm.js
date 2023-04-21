import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addTransaction } from "./Api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTransactionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    date: new Date(),
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
        date: new Date(),
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
        <DatePicker
          selected={formData.date}
          onChange={(date) =>
            setFormData({ ...formData, date: date.toISOString() })
          }
          dateFormat="yyyy-MM-dd"
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
