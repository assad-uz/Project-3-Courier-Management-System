import React from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import Footer from "../../../components/admin/Footer";

const AddUser = () => {
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
                <div class="container-xxl flex-grow-1 container-p-y">
                  <div className="card-body">
                    {/* Insert Your content here */}
                    Add User
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

export default AddUser;
