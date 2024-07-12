import React, { useState } from 'react';

const StudentRegistration = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit student registration data
    console.log(student);
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={student.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={student.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} />
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" value={student.dateOfBirth} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
