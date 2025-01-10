import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = { name: '', email: '', message: '' };
    let isValid = true;

    // Validation
    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      try {
        // Send the form data to the backend using axios
        const response = await axios.post('http://localhost:3001/api/send', formData);

        if (response.status === 200) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form after submit
        } else {
          setStatus('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setStatus('An error occurred while sending the message.');
      }
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>

      {status && <div className="status-message">{status}</div>}
    </div>
  );
};

export default Contact;