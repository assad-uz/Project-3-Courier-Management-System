import React, { useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Footer from "../../../components/admin/Footer";

const AddNew = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    branch_id: "",
    email: "",
    phone: "",
    password: "",
  });

  // ফর্ম ভ্যালু পরিবর্তন
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ফর্ম সাবমিট
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Branch Staff Added Successfully!");
    // এখানে API call বা backend logic হবে
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Sidebar */}
        <Sidebar />

        <div className="layout-page">
          {/* Navbar */}
          <Navbar />

          {/* Content */}
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">Add New Branch Staff</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        {/* First Name */}
                        <div className="mb-3">
                          <label htmlFor="firstname" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Last Name */}
                        <div className="mb-3">
                          <label htmlFor="lastname" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Branch ID */}
                        <div className="mb-3">
                          <label htmlFor="branch_id" className="form-label">
                            Branch ID
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="branch_id"
                            name="branch_id"
                            value={formData.branch_id}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Phone */}
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Add Staff
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
