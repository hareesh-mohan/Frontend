import React, { useState } from 'react';


function UniqueIdGenerator() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  const handleLoginClick = () => {
    setShowForm(true); // Show the form after clicking "Login" button
  };
 
const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setShowForm(true);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle network error
    }
  }

  return (
     
        // Render form to input username and password
        <form onSubmit={handleSubmit} className='form-container'>
          <label>
            Username:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit" >Login</button>
        </form>
      
      
  
  );
}

export default UniqueIdGenerator;
