-- ===============================
-- Role Table
-- ===============================
CREATE TABLE role (
  role_id INT PRIMARY KEY AUTO_INCREMENT,
  role_type VARCHAR(50) NOT NULL
);

-- ===============================
-- Users Table
-- ===============================
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  role_id INT NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES role (role_id)
);

-- ===============================
-- Courier Status Table
-- ===============================
CREATE TABLE courier_status (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(50) NOT NULL
);

-- Updated Courier Table: Foreign Key for status
CREATE TABLE couriers (
    courier_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    receiver_name VARCHAR(100),
    receiver_address VARCHAR(255),
    receiver_phone VARCHAR(15),
    sender_address VARCHAR(15),
    status_id INT DEFAULT 1,  -- Foreign Key for status (Pending by default)
    delivery_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (status_id) REFERENCES courier_status(status_id)
);

-- ===============================
-- Branches Table
-- ===============================
CREATE TABLE branches (
  branch_id INT PRIMARY KEY AUTO_INCREMENT,
  branch_name VARCHAR(100) NOT NULL,
  branch_contact VARCHAR(15) NOT NULL
);


-- ===============================
-- Payment Status Table
-- ===============================
CREATE TABLE payment_status (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(50) NOT NULL
);

-- Updated Payment Table: Foreign Key for payment status
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    courier_id INT,
    amount DECIMAL(10, 2),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_status_id INT DEFAULT 1,  -- Foreign Key for payment status (Pending by default)
    FOREIGN KEY (courier_id) REFERENCES couriers(courier_id),
    FOREIGN KEY (payment_status_id) REFERENCES payment_status(status_id)
);


