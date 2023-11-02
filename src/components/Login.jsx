import React, { useState } from 'react';
import "./login.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }

    if (formData.password === '') {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit the login data (e.g., validate against a database)

      // Clear the form
      setFormData({
        email: '',
        password: '',
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-page-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
