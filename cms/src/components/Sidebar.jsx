import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  componentDidMount() {
    // Re-initialize AdminLTE treeview after component mounts
    if (window.$) {
      window.$('[data-widget="treeview"]').Treeview("init");
    }
  }

  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <img
            src="assets-admin/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="assets-admin/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          {/* Sidebar Search */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Dashboard */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/dashboard-v1" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/dashboard-v2" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/dashboard-v3" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>

              {/* Widgets */}
              <li className="nav-item">
                <a href="/widgets" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Widgets <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>

              {/* Users */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Users
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/add-user" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add User</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manage-user" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Manage Users</p>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Section Header */}
              <li className="nav-header">MISCELLANEOUS</li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Sidebar;
