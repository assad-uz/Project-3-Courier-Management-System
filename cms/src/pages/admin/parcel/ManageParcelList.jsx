import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Footer from "../../../components/admin/Footer";

const ManageParcelList = () => {
  // Dummy Data (তুমি API থেকে আনতে পারো)
  const parcels = [
    {
      id: 1,
      order_id: "ORD1001",
      created_by: 2,
      sender_name: "Rahim",
      sender_address: "Dhaka, Bangladesh",
      sender_phone: "01711111111",
      receiver_name: "Karim",
      receiver_address: "Chittagong, Bangladesh",
      receiver_phone: "01822222222",
      delivery_type: "Express",
      pickup_branch: 1,
      weight: "2kg",
      delivery_charge: "200",
      total_amount: 1200,
      delivery_date: "2025-10-05",
      status: "Pending",
      created_at: "2025-09-30 11:20:00",
    },
    {
      id: 2,
      order_id: "ORD1002",
      created_by: 3,
      sender_name: "Sabbir",
      sender_address: "Sylhet, Bangladesh",
      sender_phone: "01733333333",
      receiver_name: "Hasan",
      receiver_address: "Khulna, Bangladesh",
      receiver_phone: "01844444444",
      delivery_type: "Regular",
      pickup_branch: 2,
      weight: "1.5kg",
      delivery_charge: "150",
      total_amount: 800,
      delivery_date: "2025-10-07",
      status: "Delivered",
      created_at: "2025-09-29 15:45:00",
    },
  ];

  const [filterText, setFilterText] = useState("");

  // Columns Define
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Order ID", selector: (row) => row.order_id, sortable: true },
    { name: "Created By", selector: (row) => row.created_by },
    { name: "Sender Name", selector: (row) => row.sender_name },
    { name: "Sender Address", selector: (row) => row.sender_address },
    { name: "Sender Phone", selector: (row) => row.sender_phone },
    { name: "Receiver Name", selector: (row) => row.receiver_name },
    { name: "Receiver Address", selector: (row) => row.receiver_address },
    { name: "Receiver Phone", selector: (row) => row.receiver_phone },
    { name: "Delivery Type", selector: (row) => row.delivery_type },
    { name: "Pickup Branch", selector: (row) => row.pickup_branch },
    { name: "Weight", selector: (row) => row.weight },
    { name: "Delivery Charge", selector: (row) => row.delivery_charge },
    { name: "Total Amount", selector: (row) => row.total_amount, sortable: true },
    { name: "Delivery Date", selector: (row) => row.delivery_date },
    {
      name: "Status",
      cell: (row) => (
        <span
          className={`badge ${
            row.status === "Delivered" ? "bg-success" : "bg-warning"
          }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    { name: "Created At", selector: (row) => row.created_at },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            className="btn btn-sm btn-primary me-2"
            onClick={() => alert("Edit Parcel ID: " + row.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() =>
              window.confirm("Delete Parcel ID: " + row.id) && alert("Deleted")
            }
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  // Filter করা হচ্ছে
  const filteredData = parcels.filter(
    (item) =>
      item.order_id.toLowerCase().includes(filterText.toLowerCase()) ||
      item.sender_name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.receiver_name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Sidebar */}
        <Sidebar />

        <div className="layout-page">
          {/* Navbar */}
          <Navbar />

          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-3">Manage Parcel List</h4>

                  {/* Search Box */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by Order ID, Sender, Receiver..."
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                    />
                  </div>

                  {/* DataTable */}
                  <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    highlightOnHover
                    striped
                    responsive
                  />
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

export default ManageParcelList;
