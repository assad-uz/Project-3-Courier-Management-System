import React, { useState } from 'react';
import Sidebar from '../../../components/admin/Sidebar';
import Navbar from '../../../components/admin/Navbar';
import Footer from '../../../components/admin/Footer';

const AddBranch = () => {
  const [formData, setFormData] = useState({
    role_id: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("User added successfully!");
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">Add Branch</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="role_id" className="form-label">Role ID</label>
                          <input type="number" className="form-control" id="role_id" name="role_id" value={formData.role_id} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="firstname" className="form-label">First Name</label>
                          <input type="text" className="form-control" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="lastname" className="form-label">Last Name</label>
                          <input type="text" className="form-control" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">Username</label>
                          <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">Phone</label>
                          <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>

                        <button type="submit" className="btn btn-primary">Add Branch</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            <div className="content-backdrop fade" />
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
      </div>
    </div>
  );
};

export default AddBranch;
