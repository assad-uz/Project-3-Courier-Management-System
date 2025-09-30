-- ===============================
-- Role Table
-- ===============================
CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  role_type VARCHAR(50) NOT NULL
);

-- ===============================
-- Users Table
-- ===============================
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  role_id INT NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  password VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES role (id)
);

-- ===============================
-- Branch Staff Table
-- ===============================
CREATE TABLE branch_staff (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  branch_id INT NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  password VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (branch_id) REFERENCES branches (id)
);

-- ===============================
-- Parcel Table
-- ===============================
CREATE TABLE parcel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL,
    created_by INT,
    sender_name VARCHAR(100),
    sender_address VARCHAR(255),
    sender_phone VARCHAR(15),
    receiver_name VARCHAR(100),
    receiver_address VARCHAR(255),
    receiver_phone VARCHAR(15),
    delivery_type VARCHAR(15),
    pickup_branch INT,
    weight VARCHAR(100),
    delivery_charge VARCHAR(255),
    total_amount INT,
    delivery_date DATE,
    status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (pickup_branch) REFERENCES branches (id)
);

-- ===============================
-- Parcel Status Table
-- ===============================
CREATE TABLE parcel_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(50) NOT NULL
);

-- ===============================
-- Branches Table
-- ===============================
CREATE TABLE branches (
  id INT PRIMARY KEY AUTO_INCREMENT,
  branch_address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  thana VARCHAR(100) NOT NULL,
  zip_code VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  contact VARCHAR(15) NOT NULL
);

-- ===============================
-- Pickup Request Table
-- ===============================
CREATE TABLE pickup_req (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pickup_address VARCHAR(100) NOT NULL,
    contact VARCHAR(20) NOT NULL,
    pickup_time DATETIME NOT NULL
);

-- ===============================
-- Payment Status Table
-- ===============================
CREATE TABLE payment_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(50) NOT NULL
);

-- ===============================
-- Payment Table
-- ===============================
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parcel_id INT,
    amount DECIMAL(10, 2),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_status_id INT DEFAULT 1,
    FOREIGN KEY (parcel_id) REFERENCES parcels(id),
    FOREIGN KEY (payment_status_id) REFERENCES payment_status(id)
);

-- ===============================
-- Parcel Track Table
-- ===============================
CREATE TABLE parcel_track (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parcel_id INT,
    order_id VARCHAR(50),
    parcel_status_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parcel_id) REFERENCES parcels(id),
    FOREIGN KEY (order_id) REFERENCES parcels(order_id),
    FOREIGN KEY (parcel_status_id) REFERENCES parcel_status(id)
);
