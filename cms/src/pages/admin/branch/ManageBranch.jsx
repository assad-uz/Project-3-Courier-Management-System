import React from 'react';
import Sidebar from '../../../components/admin/Sidebar';
import Navbar from '../../../components/admin/Navbar';
import Footer from '../../../components/admin/Footer';

const ManageBranch = () => {
    const branches = [
        { id: 1, name: "Dhaka Branch", location: "Dhaka", phone: "01711111111", status: "Active" },
        { id: 2, name: "Chittagong Branch", location: "Chittagong", phone: "01822222222", status: "Active" },
        { id: 3, name: "Sylhet Branch", location: "Sylhet", phone: "01933333333", status: "Inactive" },
    ];

    const handleEdit = (id) => {
        alert(`Edit branch with ID: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Delete branch with ID: ${id}`);
    };

    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />
                <div className="layout-page">
                    <Navbar />
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">Manage Branch</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Branch Name</th>
                                                    <th>Location</th>
                                                    <th>Phone</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {branches.map((b) => (
                                                    <tr key={b.id}>
                                                        <td>{b.id}</td>
                                                        <td>{b.name}</td>
                                                        <td>{b.location}</td>
                                                        <td>{b.phone}</td>
                                                        <td>
                                                            <span className={`badge ${b.status === "Active" ? "bg-label-success" : "bg-label-danger"}`}>
                                                                {b.status}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn-primary me-2"
                                                                onClick={() => handleEdit(b.id)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-danger"
                                                                onClick={() => handleDelete(b.id)}
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
                        <Footer />
                        <div className="content-backdrop fade" />
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle" />
            </div>
        </div>
    );
};

export default ManageBranch;
