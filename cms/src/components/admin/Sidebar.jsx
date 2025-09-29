import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Separate state for each section
  const [userOpen, setUserOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [bstaffOpen, setBstaffOpen] = useState(false);
  const [parcelOpen, setParcelOpen] = useState(false);

  return (
    <div>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <Link to="/" className="app-brand-link">
            <span className="app-brand-logo demo">
              <svg
                width={25}
                viewBox="0 0 25 42"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>{/* SVG paths */}</defs>
                <g
                  id="g-app-brand"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Brand-Logo"
                    transform="translate(-27.000000, -15.000000)"
                  >
                    <g id="Icon" transform="translate(27.000000, 15.000000)">
                      <g id="Mask" transform="translate(0.000000, 8.000000)">
                        <mask id="mask-2" fill="white">
                          <use xlinkHref="#path-1" />
                        </mask>
                        <use fill="#696cff" xlinkHref="#path-1" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className="app-brand-text demo menu-text fw-bolder ms-2">
              SwiftCourier
            </span>
          </Link>
          <a
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle" />
          </a>
        </div>

        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          {/* Dashboard */}
          <li className="menu-item active">
            <Link to="/" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle" />
              <div>Dashboard</div>
            </Link>
          </li>

          {/* User Section */}
          <li className={`menu-item ${userOpen ? "open" : ""}`}>
            <a
              href="#"
              className="menu-link menu-toggle"
              onClick={(e) => {
                e.preventDefault();
                setUserOpen(!userOpen);
              }}
            >
              <i className="menu-icon tf-icons bx bx-user" />
              <div>User</div>
            </a>
            {userOpen && (
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="/add-user" className="menu-link">
                    <div>Add User</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/manage-user" className="menu-link">
                    <div>Manage User</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Branches Section */}
          <li className={`menu-item ${branchesOpen ? "open" : ""}`}>
            <a
              href="#"
              className="menu-link menu-toggle"
              onClick={(e) => {
                e.preventDefault();
                setBranchesOpen(!branchesOpen);
              }}
            >
              <i className="menu-icon tf-icons bx bx-building" />
              <div>Branches</div>
            </a>
            {branchesOpen && (
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="/add-branch" className="menu-link">
                    <div>Add New</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/manage-branch" className="menu-link">
                    <div>Manage All</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
            <Link to="/reg-list"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bx-list-ul" />
              <div>Registration</div>
            </Link>
          </li>

          {/* Pages Section */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pages</span>
          </li>

            <li className={`menu-item ${bstaffOpen ? "open" : ""}`}>
            <a
              href="#"
              className="menu-link menu-toggle"
              onClick={(e) => {
                e.preventDefault();
                setBstaffOpen(!bstaffOpen);
              }}
            >
              <i className="menu-icon tf-icons bx bx-group" />
              <div>Branch Staff</div>
            </a>
            {bstaffOpen && (
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="/add-branch-staff" className="menu-link">
                    <div>Add New</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/manage-branch-staff" className="menu-link">
                    <div>Manage All</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={`menu-item ${parcelOpen ? "open" : ""}`}>
            <a
              href="#"
              className="menu-link menu-toggle"
              onClick={(e) => {
                e.preventDefault();
                setParcelOpen(!parcelOpen);
              }}
            >
              <i className="menu-icon tf-icons bx bx-shopping-bag" />
              <div>Parcels</div>
            </a>
            {parcelOpen && (
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="/add-parcel" className="menu-link">
                    <div>Add New</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/manage-parcel" className="menu-link">
                    <div>Manage All</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Documentation */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Others</span>
          </li>
          <li className="menu-item">
            <a
              href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
              target="_blank"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bx-file" />
              <div>Documentation</div>
            </a>
          </li>

          
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
