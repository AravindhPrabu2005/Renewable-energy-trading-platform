import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './usersign.css';
import { Link } from 'react-router-dom';
const Usersign = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [district, setDistrict] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password || !phone || !address || !location || !district) {
      setError('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.post('https://energy-backend-ww4p.onrender.com/api/user/register/user', {
        username,
        email,
        phone,
        address,
        location,
        district,
        password,
      });

      if (response.status === 201) {
        setSuccess('Company registered successfully!');
        // Clear the form
        setUsername('');
        setEmail('');
        setPassword('');
        setPhone('');
        setAddress('');
        setLocation('');
        setDistrict('');
        setError('');
      }
    } catch (error) {
      setError('Error registering company. Please try again.');
    }
  };

  return (
    <div className='bodybg'>
      <div className='d-flex justify-content-center align-items-center min-vh-100 bg-dark'>
        <div className='bg-light p-4 rounded shadow-lg' style={{ maxWidth: '400px', width: '100%' }}>
          <h2>Create a Company Account</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">District</label>
              <input
                type="text"
                className="form-control"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="btn w-100" variant="outline-success">
              Sign Up
            </Button>
            <Link to='/signup' className='d-block text-center mb-3 text-decoration-none text-primary'>
                            Signup as company ?
                        </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Usersign;
