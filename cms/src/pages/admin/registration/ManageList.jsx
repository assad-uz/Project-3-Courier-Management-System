import React from 'react';
import Sidebar from '../../../components/admin/Sidebar';
import Navbar from '../../../components/admin/Navbar';
import Footer from '../../../components/admin/Footer';

const ManageRegList = () => {
    const requests = [
        { id: 1, pickup_address: "Dhaka, Mirpur-10", contact: "01711111111", pickup_time: "2025-09-30 10:00:00" },
        { id: 2, pickup_address: "Chittagong, Halishahar", contact: "01822222222", pickup_time: "2025-09-30 11:30:00" },
        { id: 3, pickup_address: "Sylhet, Zindabazar", contact: "01933333333", pickup_time: "2025-09-30 12:45:00" },
    ];

    const handleEdit = (id) => {
        alert(`Edit request with ID: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Delete request with ID: ${id}`);
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
                                    <h5 className="mb-0">Manage Pickup Requests</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Pickup Address</th>
                                                    <th>Contact</th>
                                                    <th>Pickup Time</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {requests.map((r) => (
                                                    <tr key={r.id}>
                                                        <td>{r.id}</td>
                                                        <td>{r.pickup_address}</td>
                                                        <td>{r.contact}</td>
                                                        <td>{r.pickup_time}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn-primary me-2"
                                                                onClick={() => handleEdit(r.id)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-danger"
                                                                onClick={() => handleDelete(r.id)}
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

export default ManageRegList;
