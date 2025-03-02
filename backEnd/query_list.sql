-- All Packages with Location & Guide Info
SELECT tp.name, l.city, g.name AS guide_name 
FROM travel_packages tp
JOIN locations l ON tp.location_id = l.location_id
JOIN guides g ON tp.guide_id = g.guide_id;
-- Top 5 Most Expensive Packages
SELECT name, price 
FROM travel_packages 
ORDER BY price DESC 
LIMIT 5;
-- Total Revenue Per Payment Method
SELECT payment_method, SUM(amount) AS total 
FROM payments 
GROUP BY payment_method;
-- Packages Without Any Bookings (Subquery)
SELECT c.name, COUNT(b.booking_id) AS bookings 
FROM clients c
JOIN bookings b ON c.id = b.client_id
GROUP BY c.id 
HAVING bookings > 1;
-- Average Package Price Per City
SELECT l.city, AVG(tp.price) AS avg_price 
FROM locations l
JOIN travel_packages tp ON l.location_id = tp.location_id
GROUP BY l.city;
-- Guide Workload Analysis
SELECT g.name, COUNT(tp.package_id) AS packages 
FROM guides g
LEFT JOIN travel_packages tp ON g.guide_id = tp.guide_id
GROUP BY g.guide_id;
-- full client booking details
SELECT c.name, tp.name AS package, p.amount 
FROM clients c
JOIN bookings b ON c.id = b.client_id
JOIN travel_packages tp ON b.package_id = tp.package_id
JOIN payments p ON b.booking_id = p.booking_id;
-- reveneu per month
SELECT MONTH(createdAt) AS month, 
       SUM(amount) AS revenue 
FROM payments 
GROUP BY MONTH(createdAt);
-- cross join clients and transports
SELECT c.name, t.company_name 
FROM clients c
CROSS JOIN transports t;
-- top spending clients
SELECT c.name, SUM(p.amount) AS total_spent 
FROM payments p
JOIN clients c ON p.client_id = c.id
GROUP BY c.id 
ORDER BY total_spent DESC 
LIMIT 3;
-- packages with above average 
SELECT c.name, SUM(p.amount) AS total_spent 
FROM payments p
JOIN clients c ON p.client_id = c.id
GROUP BY c.id 
ORDER BY total_spent DESC 
LIMIT 3;
-- guide location and packages
SELECT g.name AS guide, l.city, COUNT(tp.package_id) AS packages 
FROM guides g
JOIN travel_packages tp ON g.guide_id = tp.guide_id
JOIN locations l ON tp.location_id = l.location_id
GROUP BY g.guide_id, l.city;
-- clients payment method analysis
SELECT c.name, p.payment_method, COUNT(*) AS transactions 
FROM payments p
JOIN clients c ON p.client_id = c.id
GROUP BY c.id, p.payment_method;
-- recent booking with details
SELECT c.name, tp.name AS package, b.createdAt 
FROM bookings b
JOIN clients c ON b.client_id = c.id
JOIN travel_packages tp ON b.package_id = tp.package_id
WHERE b.createdAt > NOW() - INTERVAL 7 DAY;
-- transport option for city packages
SELECT tp.name AS package, t.company_name 
FROM travel_packages tp
CROSS JOIN transports t
WHERE t.destination = 
  (SELECT city FROM locations WHERE location_id = tp.location_id);
--  Popular Package Duration Analysis 
 SELECT duration, COUNT(booking_id) AS bookings 
FROM travel_packages tp
JOIN bookings b ON tp.package_id = b.package_id
GROUP BY duration; 
-- package price vs location avg
SELECT tp.name, tp.price, 
  (SELECT AVG(price) 
   FROM travel_packages 
   WHERE location_id = tp.location_id) AS loc_avg 
FROM travel_packages tp;