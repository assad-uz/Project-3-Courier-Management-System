import React from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Footer from "../../../components/admin/Footer";

const ManageList = () => {
  // static data (demo)
  const staffs = [
    {
      id: 1,
      firstname: "Rahim",
      lastname: "Uddin",
      branch_id: 101,
      email: "rahim@example.com",
      phone: "01711111111",
      password: "rahim123",
      created_at: "2025-09-30 10:20:00",
    },
    {
      id: 2,
      firstname: "Karim",
      lastname: "Ali",
      branch_id: 102,
      email: "karim@example.com",
      phone: "01822222222",
      password: "karim321",
      created_at: "2025-09-30 10:30:00",
    },
    {
      id: 3,
      firstname: "Jannat",
      lastname: "Akter",
      branch_id: 103,
      email: "jannat@example.com",
      phone: "01933333333",
      password: "jannat@99",
      created_at: "2025-09-30 10:40:00",
    },
  ];

  const handleEdit = (id) => {
    alert(`Edit staff with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete staff with ID: ${id}`);
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
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Manage Branch Staff</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Branch ID</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Password</th>
                          <th>Created At</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {staffs.map((s) => (
                          <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.firstname}</td>
                            <td>{s.lastname}</td>
                            <td>{s.branch_id}</td>
                            <td>{s.email}</td>
                            <td>{s.phone}</td>
                            <td>{s.password}</td>
                            <td>{s.created_at}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-primary me-2"
                                onClick={() => handleEdit(s.id)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(s.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default ManageList;
