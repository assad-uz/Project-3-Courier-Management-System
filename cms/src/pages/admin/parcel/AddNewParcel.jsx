import React, { useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Footer from "../../../components/admin/Footer";

const AddNewParcel = () => {
  const [formData, setFormData] = useState({
    order_id: "",
    created_by: "",
    sender_name: "",
    sender_address: "",
    sender_phone: "",
    receiver_name: "",
    receiver_address: "",
    receiver_phone: "",
    delivery_type: "",
    pickup_branch: "",
    weight: "",
    delivery_charge: "",
    total_amount: "",
    delivery_date: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Parcel Data:", formData);
    alert("New Parcel Added Successfully!");
    // এখানে API call করে backend এ data save করবেন
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
                <div className="col-12 col-md-10 col-lg-8">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">Add New Parcel</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        {/* Order ID */}
                        <div className="mb-3">
                          <label htmlFor="order_id" className="form-label">
                            Order ID
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="order_id"
                            name="order_id"
                            value={formData.order_id}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Created By */}
                        <div className="mb-3">
                          <label htmlFor="created_by" className="form-label">
                            Created By (User ID)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="created_by"
                            name="created_by"
                            value={formData.created_by}
                            onChange={handleChange}
                          />
                        </div>

                        {/* Sender Info */}
                        <h6 className="mt-3">Sender Information</h6>
                        <div className="mb-3">
                          <label htmlFor="sender_name" className="form-label">
                            Sender Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="sender_name"
                            name="sender_name"
                            value={formData.sender_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="sender_address"
                            className="form-label"
                          >
                            Sender Address
                          </label>
                          <textarea
                            className="form-control"
                            id="sender_address"
                            name="sender_address"
                            rows="2"
                            value={formData.sender_address}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="sender_phone" className="form-label">
                            Sender Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="sender_phone"
                            name="sender_phone"
                            value={formData.sender_phone}
                            onChange={handleChange}
                          />
                        </div>

                        {/* Receiver Info */}
                        <h6 className="mt-3">Receiver Information</h6>
                        <div className="mb-3">
                          <label htmlFor="receiver_name" className="form-label">
                            Receiver Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="receiver_name"
                            name="receiver_name"
                            value={formData.receiver_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="receiver_address"
                            className="form-label"
                          >
                            Receiver Address
                          </label>
                          <textarea
                            className="form-control"
                            id="receiver_address"
                            name="receiver_address"
                            rows="2"
                            value={formData.receiver_address}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="receiver_phone"
                            className="form-label"
                          >
                            Receiver Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="receiver_phone"
                            name="receiver_phone"
                            value={formData.receiver_phone}
                            onChange={handleChange}
                          />
                        </div>

                        {/* Delivery Info */}
                        <h6 className="mt-3">Delivery Information</h6>
                        <div className="mb-3">
                          <label
                            htmlFor="delivery_type"
                            className="form-label"
                          >
                            Delivery Type
                          </label>
                          <select
                            className="form-select"
                            id="delivery_type"
                            name="delivery_type"
                            value={formData.delivery_type}
                            onChange={handleChange}
                          >
                            <option value="">Select Type</option>
                            <option value="Regular">Regular</option>
                            <option value="Express">Express</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="pickup_branch"
                            className="form-label"
                          >
                            Pickup Branch (ID)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="pickup_branch"
                            name="pickup_branch"
                            value={formData.pickup_branch}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="weight" className="form-label">
                            Weight
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="weight"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="delivery_charge"
                            className="form-label"
                          >
                            Delivery Charge
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="delivery_charge"
                            name="delivery_charge"
                            value={formData.delivery_charge}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="total_amount"
                            className="form-label"
                          >
                            Total Amount
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="total_amount"
                            name="total_amount"
                            value={formData.total_amount}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="delivery_date"
                            className="form-label"
                          >
                            Delivery Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="delivery_date"
                            name="delivery_date"
                            value={formData.delivery_date}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="status" className="form-label">
                            Status
                          </label>
                          <select
                            className="form-select"
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                          >
                            <option value="">Select Status</option>
                            <option value="Pending">Pending</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Add Parcel
                        </button>
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

export default AddNewParcel;
