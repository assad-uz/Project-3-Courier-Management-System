import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
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
                    <div className="row">
                      {/* Card 1 */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Total Branches
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">15</span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Total Parcel
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">25</span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Card 3 --> */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Total Staff
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">7</span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Card 4 --> */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Pickup Request
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">9</span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Card 5 --> */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Delivered
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">11</span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Card 6 --> */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Cancelled
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">4</span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Card 7 --> */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Collected
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">10</span>
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Card 8 --> */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Total Delivery Charge
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">
                                Tk 1,050
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Card 9 --> */}
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <span className="fw-semibold d-block mb-1">
                              Total Amount
                            </span>
                            <h3 className="card-title mb-2">
                              <span className="highlighted-number">
                                Tk 9,500
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {/* Order Statistics */}
                      <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                        <div className="card h-100">
                          <div className="card-header d-flex align-items-center justify-content-between pb-0">
                            <div className="card-title mb-0">
                              <h5 className="m-0 me-2">Order Statistics</h5>
                              <small className="text-muted">
                                42.82k Total Sales
                              </small>
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="orederStatistics"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="orederStatistics"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Select All
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Refresh
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Share
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <div className="d-flex flex-column align-items-center gap-1">
                                <h2 className="mb-2">8,258</h2>
                                <span>Total Orders</span>
                              </div>
                              <div id="orderStatisticsChart" />
                            </div>
                            <ul className="p-0 m-0">
                              <li className="d-flex mb-4 pb-1">
                                <div className="avatar flex-shrink-0 me-3">
                                  <span className="avatar-initial rounded bg-label-primary">
                                    <i className="bx bx-mobile-alt" />
                                  </span>
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <h6 className="mb-0">Electronic</h6>
                                    <small className="text-muted">
                                      Mobile, Earbuds, TV
                                    </small>
                                  </div>
                                  <div className="user-progress">
                                    <small className="fw-semibold">82.5k</small>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex mb-4 pb-1">
                                <div className="avatar flex-shrink-0 me-3">
                                  <span className="avatar-initial rounded bg-label-success">
                                    <i className="bx bx-closet" />
                                  </span>
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <h6 className="mb-0">Fashion</h6>
                                    <small className="text-muted">
                                      T-shirt, Jeans, Shoes
                                    </small>
                                  </div>
                                  <div className="user-progress">
                                    <small className="fw-semibold">23.8k</small>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex mb-4 pb-1">
                                <div className="avatar flex-shrink-0 me-3">
                                  <span className="avatar-initial rounded bg-label-info">
                                    <i className="bx bx-home-alt" />
                                  </span>
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <h6 className="mb-0">Decor</h6>
                                    <small className="text-muted">
                                      Fine Art, Dining
                                    </small>
                                  </div>
                                  <div className="user-progress">
                                    <small className="fw-semibold">849k</small>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex">
                                <div className="avatar flex-shrink-0 me-3">
                                  <span className="avatar-initial rounded bg-label-secondary">
                                    <i className="bx bx-football" />
                                  </span>
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <h6 className="mb-0">Sports</h6>
                                    <small className="text-muted">
                                      Football, Cricket Kit
                                    </small>
                                  </div>
                                  <div className="user-progress">
                                    <small className="fw-semibold">99</small>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*/ Order Statistics */}

                      {/* Expense Overview */}
                      <div className="col-md-6 col-lg-4 order-1 mb-4">
                        <div className="card h-100">
                          <div className="card-header">
                            <ul className="nav nav-pills" role="tablist">
                              <li className="nav-item">
                                <button
                                  type="button"
                                  className="nav-link active"
                                  role="tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#navs-tabs-line-card-income"
                                  aria-controls="navs-tabs-line-card-income"
                                  aria-selected="true"
                                >
                                  Income
                                </button>
                              </li>
                              <li className="nav-item">
                                <button
                                  type="button"
                                  className="nav-link"
                                  role="tab"
                                >
                                  Expenses
                                </button>
                              </li>
                              <li className="nav-item">
                                <button
                                  type="button"
                                  className="nav-link"
                                  role="tab"
                                >
                                  Profit
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body px-0">
                            <div className="tab-content p-0">
                              <div
                                className="tab-pane fade show active"
                                id="navs-tabs-line-card-income"
                                role="tabpanel"
                              >
                                <div className="d-flex p-4 pt-3">
                                  <div className="avatar flex-shrink-0 me-3">
                                    <img
                                      src="admin-assets/assets/img/icons/unicons/wallet.png"
                                      alt="User"
                                    />
                                  </div>
                                  <div>
                                    <small className="text-muted d-block">
                                      Total Balance
                                    </small>
                                    <div className="d-flex align-items-center">
                                      <h6 className="mb-0 me-1">$459.10</h6>
                                      <small className="text-success fw-semibold">
                                        <i className="bx bx-chevron-up" />
                                        42.9%
                                      </small>
                                    </div>
                                  </div>
                                </div>
                                <div id="incomeChart" />
                                <div className="d-flex justify-content-center pt-4 gap-2">
                                  <div className="flex-shrink-0">
                                    <div id="expensesOfWeek" />
                                  </div>
                                  <div>
                                    <p className="mb-n1 mt-1">
                                      Expenses This Week
                                    </p>
                                    <small className="text-muted">
                                      $39 less than last week
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*/ Expense Overview */}
                      {/* Transactions */}
                      <div className="col-md-6 col-lg-4 order-2 mb-4">
                        <div className="card h-100">
                          <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0 me-2">
                              Transactions
                            </h5>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="transactionID"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="transactionID"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Last 28 Days
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Last Month
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Last Year
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <ul className="p-0 m-0">
                              <li className="d-flex mb-4 pb-1">
                                <div className="avatar flex-shrink-0 me-3">
                                  <img
                                    src="admin-assets/assets/img/icons/unicons/paypal.png"
                                    alt="User"
                                    className="rounded"
                                  />
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="text-muted d-block mb-1">
                                      Paypal
                                    </small>
                                    <h6 className="mb-0">Send money</h6>
                                  </div>
                                  <div className="user-progress d-flex align-items-center gap-1">
                                    <h6 className="mb-0">+82.6</h6>
                                    <span className="text-muted">USD</span>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex mb-4 pb-1">
                                <div className="avatar flex-shrink-0 me-3">
                                  <img
                                    src="admin-assets/assets/img/icons/unicons/wallet.png"
                                    alt="User"
                                    className="rounded"
                                  />
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="text-muted d-block mb-1">
                                      Wallet
                                    </small>
                                    <h6 className="mb-0">Mac'D</h6>
                                  </div>
                                  <div className="user-progress d-flex align-items-center gap-1">
                                    <h6 className="mb-0">+270.69</h6>
                                    <span className="text-muted">USD</span>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex mb-4 pb-1">
                                <div className="avatar flex-shrink-0 me-3">
                                  <img
                                    src="admin-assets/assets/img/icons/unicons/chart.png"
                                    alt="User"
                                    className="rounded"
                                  />
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="text-muted d-block mb-1">
                                      Transfer
                                    </small>
                                    <h6 className="mb-0">Refund</h6>
                                  </div>
                                  <div className="user-progress d-flex align-items-center gap-1">
                                    <h6 className="mb-0">+637.91</h6>
                                    <span className="text-muted">USD</span>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex mb-4 pb-1">
                                <div className="avatar flex-shrink-0 me-3">
                                  <img
                                    src="admin-assets/assets/img/icons/unicons/cc-success.png"
                                    alt="User"
                                    className="rounded"
                                  />
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="text-muted d-block mb-1">
                                      Credit Card
                                    </small>
                                    <h6 className="mb-0">Ordered Food</h6>
                                  </div>
                                  <div className="user-progress d-flex align-items-center gap-1">
                                    <h6 className="mb-0">-838.71</h6>
                                    <span className="text-muted">USD</span>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex mb-4 pb-1">
                                <div className="avatar flex-shrink-0 me-3">
                                  <img
                                    src="admin-assets/assets/img/icons/unicons/wallet.png"
                                    alt="User"
                                    className="rounded"
                                  />
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="text-muted d-block mb-1">
                                      Wallet
                                    </small>
                                    <h6 className="mb-0">Starbucks</h6>
                                  </div>
                                  <div className="user-progress d-flex align-items-center gap-1">
                                    <h6 className="mb-0">+203.33</h6>
                                    <span className="text-muted">USD</span>
                                  </div>
                                </div>
                              </li>
                              <li className="d-flex">
                                <div className="avatar flex-shrink-0 me-3">
                                  <img
                                    src="admin-assets/assets/img/icons/unicons/cc-warning.png"
                                    alt="User"
                                    className="rounded"
                                  />
                                </div>
                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                  <div className="me-2">
                                    <small className="text-muted d-block mb-1">
                                      Mastercard
                                    </small>
                                    <h6 className="mb-0">Ordered Food</h6>
                                  </div>
                                  <div className="user-progress d-flex align-items-center gap-1">
                                    <h6 className="mb-0">-92.45</h6>
                                    <span className="text-muted">USD</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*/ Transactions */}
                    </div>
                  </div>
                </div>

                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n  .highlighted-number {\n    color: #f39c12; /* Orange color */\n    font-weight: bold;\n  }\n",
                  }}
                />

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

export default Dashboard;
