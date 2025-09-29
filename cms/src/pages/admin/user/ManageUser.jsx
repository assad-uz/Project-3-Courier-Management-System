import React from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Footer from "../../../components/admin/Footer";

const ManageUser = () => {
  const users = [
    {
      id: 1,
      role_id: 1,
      firstname: "Assad",
      lastname: "Zaman",
      username: "assad01",
      email: "assad01@example.com",
      phone: "01711111111",
      password: "pass123",
      created_at: "2025-09-29 10:30:00",
    },
    {
      id: 2,
      role_id: 2,
      firstname: "Rahim",
      lastname: "Uddin",
      username: "rahim22",
      email: "rahim22@example.com",
      phone: "01822222222",
      password: "rahim@321",
      created_at: "2025-09-29 10:35:00",
    },
    {
      id: 3,
      role_id: 2,
      firstname: "Karim",
      lastname: "Ali",
      username: "karim33",
      email: "karim33@example.com",
      phone: "01933333333",
      password: "karim#999",
      created_at: "2025-09-29 10:40:00",
    },
  ];

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete user with ID: ${id}`);
  };

  return (
    <div>
      <div>
        {/* Layout wrapper */}
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* Menu */}
            <Sidebar />
            {/* / Menu */}

            {/* Layout container */}
            <div className="layout-page">
              {/* Navbar */}
              <Navbar />
              {/* / Navbar */}

              {/* Content wrapper */}
              <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Users List</h5>
                      <button className="btn btn-sm btn-success">
                        + Add User
                      </button>
                    </div>
                    <div className="card-body">
                      {/* Table */}
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered align-middle">
                          <thead className="table-blue">
                            <tr>
                              <th>ID</th>
                              <th>Role ID</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Password</th>
                              <th>Created At</th>
                              <th className="text-center">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((u) => (
                              <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.role_id}</td>
                                <td>{u.firstname}</td>
                                <td>{u.lastname}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>{u.phone}</td>
                                <td>{u.password}</td>
                                <td>{u.created_at}</td>
                                <td className="text-center">
                                  <button
                                    className="btn btn-sm btn-primary me-2"
                                    onClick={() => handleEdit(u.id)}
                                  >
                                    <i className="bx bx-edit"></i> Edit
                                  </button>
                                  <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(u.id)}
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {/* / Table */}
                    </div>
                  </div>
                </div>

                {/* / Content */}

                {/* Footer */}
                <Footer />
                {/* / Footer */}
                <div className="content-backdrop fade" />
              </div>
              {/* Content wrapper */}
            </div>
            {/* / Layout page */}
          </div>
          {/* Overlay */}
          <div className="layout-overlay layout-menu-toggle" />
        </div>
        {/* / Layout wrapper */}
      </div>
    </div>
  );
};

export default ManageUser;
