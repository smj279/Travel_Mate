CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO clients ( name, email, password, phone, address, createdAt, updatedAt)
VALUES
('rr', 'hh@gmail.com', '$2b$10$O9F6hhvmOsRZs6yaEh.uLOZOl.ZaSMDiEW23RIVruQTysTRd4Rg9.', 'dd', 'dd', '2025-02-21 10:36:55', '2025-02-21 10:36:55'),
('rr', 'hr@gmail.com', '$2b$10$pvnSmJ5g3deSRlBfExQU7OcGtvuzW5NFyfjNaosytA9YQBRUWdGhi', 'dd', 'dd', '2025-02-21 10:37:18', '2025-02-21 10:37:18'),
('joy', 'joy@gmail.com', '$2b$10$1/YzeeW8vNdo6exwQXqc0ePLXkSF3k0BOC26e1l3KrWzm56CtMxPy', '01827384743', 'dhaka', '2025-02-21 10:42:03', '2025-02-21 10:42:03'),
('kamal', 'kamal@gmail.com', '$2b$10$gR5HbZvQzUfXRw8DbO5C/O75AiR.VtnEQdMKHuyKfyRfKwUvW5fpi', '01728392832', 'Khulna', '2025-02-21 10:43:49', '2025-02-21 10:43:49'),
('Abdul Kamal', 'abdul@gmail.com', '$2b$10$NNZoseBGQsSbOvp/bKIhiOs6OadC.5QWr9NUFEoYdH7lWcy6pS2VW', '01859303303', 'Dhaka', '2025-02-23 12:04:32', '2025-02-23 12:04:32'),
('Md. Arif', 'arif@gmail.com', '$2b$10$.HLUcPnhsxhZW0dnEuNif.0Kkw3smcb1VftkyicJlHAQzU6aFvgnG', '01745345643', 'Chattogram', '2025-02-23 15:49:34', '2025-02-23 15:49:34'),
('Sumon Hossain', 'sumon@gmail.com', '$2b$10$Xfz0wVJ1ZZmXqz7kXAYo4ee1pMFG2mBy0bQRM5nOKvF4BhOPHyz32', '01711223344', 'Rajshahi', '2025-02-24 08:15:22', '2025-02-24 08:15:22'),
('Ayesha Siddique', 'ayesha@gmail.com', '$2b$10$XHdTlkk30czUAvYddBL9jeywJkYihWnlyh7lsE5n7UnVQ2y5aBx2O', '01999887766', 'Sylhet', '2025-02-24 09:25:45', '2025-02-24 09:25:45'),
( 'Tanvir Rahman', 'tanvir@gmail.com', '$2b$10$V6LWJ.RKBR3Z8X0e5jRdeuQU8pg14FqDWQ9UOCXHKfZ9lbFiF6cVO', '01837773322', 'Barishal', '2025-02-24 10:10:11', '2025-02-24 10:10:11'),
('Rima Akter', 'rima@gmail.com', '$2b$10$ft5N8uLYH5O5X8KzRWT5He7Y42H9sF7pU4sFE77lNyF4YyOLmTZfO', '01655667788', 'Comilla', '2025-02-24 11:30:00', '2025-02-24 11:30:00');
select * from clients;

CREATE TABLE travel_packages (
    package_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    location_id INT NOT NULL,
    duration VARCHAR(50) NOT NULL,
    guide_id INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES locations(location_id) ON DELETE CASCADE,
    FOREIGN KEY (guide_id) REFERENCES guides(guide_id) ON DELETE CASCADE
);
INSERT INTO travel_packages (package_id,name, price, location_id, duration, guide_id)
VALUES  
(1, "3 Days Tour in Bandarban", 5000, 11, "Three Days", 101),  
(2, "2 Days Cox's Bazar Beach Tour", 9000, 12, "Two Days", 102),  
(3, "4 Days Adventure in Sundarbans", 15000, 13, "Four Days", 103),  
(4, "5 Days Sylhet Tea Garden & Waterfall Tour", 7000, 14, "Five Days", 104),  
(5, "3 Days Saint Martin's Island Beach Getaway", 10000, 15, "Three Days", 105),  
(6, "2 Days Rangamati Lake & Tribal Culture Tour", 4000, 16, "Two Days", 106),  
(7, "3 Days Kuakata Sunrise & Sunset Tour", 5500, 17, "Three Days", 107),  
(8, "4 Days Historical Tour in Paharpur & Mahasthangarh", 6500, 18, "Four Days", 108),  
(9, "3 Days Srimangal Rainforest & Wildlife Safari", 7000, 19, "Three Days", 109),
(10, "5 Days Tour in Bandarban", 9000, 11, "Five Days", 101),
(11, "3 Days Cox's Bazar Beach Tour", 11000, 12, "Three Days", 102),
(12, "5 Days Adventure in Sundarbans", 17000, 13, "Five Days", 103),
(13, "4 Days Saint Martin's Island Beach Getaway", 12000, 15, "Four Days", 105),
(14, "3 Days Rangamati Lake & Tribal Culture Tour", 5000, 16, "Three Days", 106),
(15, "4 Days Rangamati Lake & Tribal Culture Tour", 7000, 16, "Four Days", 106),
(16, "4 Days Srimangal Rainforest & Wildlife Safari", 8000, 19, "Four Days", 109);
select * from travel_packages;

CREATE TABLE locations (
    location_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    city VARCHAR(100) NOT NULL
);
INSERT INTO locations (location_id, name, description, city) VALUES
(11, "Bandarban", "A scenic hill district known for its breathtaking landscapes and tribal culture.", "Bandarban"),
(12, "Cox's Bazar", "Home to the longest unbroken sandy beach in the world.", "Cox's Bazar"),
(13, "Sundarbans", "The largest mangrove forest in the world and home to the Royal Bengal Tiger.", "Khulna"),
(14, "Sylhet", "Famous for its lush tea gardens, waterfalls, and serene landscapes.", "Sylhet"),
(15, "Saint Martin's Island", "A beautiful coral island with crystal-clear waters and sandy beaches.", "Saint Martin"),
(16, "Rangamati", "Known for its scenic Kaptai Lake and indigenous tribal culture.", "Rangamati"),
(17, "Kuakata", "A rare place where you can enjoy both sunrise and sunset from the same beach.", "Patuakhali"),
(18, "Paharpur & Mahasthangarh", "Ancient archaeological sites showcasing Buddhist and Hindu history.", "Bogra"),
(19, "Srimangal", "The tea capital of Bangladesh, rich in biodiversity and wildlife.", "Moulvibazar");
select * from locations;

CREATE TABLE guides (
    guide_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL UNIQUE
);
INSERT INTO guides (guide_id, name, phone) VALUES
(101, "Ahmed", "01712345678"),
(102, "Moshiur", "01723456789"),
(103, "Rohit", "01734567890"),
(104, "Shamsul", "01745678901"),
(105, "Sabbir", "01756789012"),
(106, "Nusrat", "01767890123"),
(107, "Sabbir", "01778901234"),
(108, "Sharmin", "01789012345"),
(109, "Rifat", "01790123456");
select * from  guides;

CREATE TABLE bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    package_id INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES travel_packages(package_id) ON DELETE CASCADE
);
INSERT INTO bookings (client_id, package_id, createdAt, updatedAt) VALUES
(1, 3, NOW(), NOW()),
(2, 5, NOW(), NOW()),
(3, 1, NOW(), NOW()),
(4, 7, NOW(), NOW()),
(5, 2, NOW(), NOW()),
(6, 10,  NOW(), NOW()),
(8, 9,  NOW(), NOW()),
(3, 8,  NOW(), NOW()),
(10, 10,  NOW(), NOW()),
(7, 11,  NOW(), NOW()),
(9, 12,  NOW(), NOW()),
( 5, 14,  NOW(), NOW());
select * from bookings;

CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT NOT NULL,
    client_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);
INSERT INTO payments (booking_id, client_id, amount, payment_method, createdAt, updatedAt) VALUES
(1, 1, 15000.00, 'Bkash', NOW(), NOW()),
(2, 2, 10000.00, 'Bkash', NOW(), NOW()),
(3, 3, 5000.00, 'Nagad', NOW(), NOW()),
(4, 4, 7000.00, 'Nagad', NOW(), NOW()),
(5, 5, 9000.00, 'Bkash', NOW(), NOW()),
(6, 6, 9000.00, 'Bkash', NOW(), NOW()),
(7, 8, 7000.00, 'Bkash', NOW(), NOW()),
(8, 3, 6500.00, 'Nagad', NOW(), NOW()),
(9, 10, 9000.00, 'Nagad', NOW(), NOW()),
(10, 7,11000.00, 'Bkash', NOW(), NOW()),
(11, 9, 17000.00, 'Nagad', NOW(), NOW()),
(12, 5, 5000.00, 'Bkash', NOW(), NOW());
select * from payments;

CREATE TABLE transports (
    id INT PRIMARY KEY,
    source VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    fare DECIMAL(10,2) NOT NULL,
    company_name VARCHAR(100) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO transports (id,source,destination,date,fare,company_name,createdAt,updatedAt)  
VALUES  
(1, "Dhaka","Sylhet",curdate(), 800, "Ena",  NOW(), NOW()),  
(2, "Chittagong","Dhaka", curdate(),700,"Saudia" ,  NOW(), NOW()),  
(4, "Dhaka", "Chittagong",curdate(),700,"Shyamoli" ,  NOW(), NOW()),  
(5, "Sylhet","Chittagong", curdate(),1200,"Hanif" ,  NOW(), NOW());

select * from travel_packages;
select * from locations;
select * from  guides;
select * from transports;
select * from clients;
select * from bookings;
select * from payments;




