import React, { useState } from "react";
import "./Contact.css";
import { Button, TextField } from "@material-ui/core";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contactContainer">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Name"
          fullWidth
          required
        />
        <TextField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          fullWidth
          required
        />
        <TextField
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          label="Message"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
