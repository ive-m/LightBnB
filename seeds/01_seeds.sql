

INSERT INTO users (name, email, password)     
VALUES('Maria Perez', 'maria.perez@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Fer Gal', 'fer.gal@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Matt Junior', 'matt.junior@outlook.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'); 

INSERT INTO properties (title, description, owner_id, cover_photo_url, thumbnail_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, active, province, city, country, street, post_code) 
VALUES ('Beutiful Home','description', 1, 'https://images.pexels.com/photos/2104072/pexels-photo-2104072.jpeg', 'https://images.pexels.com/photos/2104072/pexels-photo-2104072.jpeg?auto=compress&cs=tinysrgb&h=350', 20000, 4, 3, 4, true, 'Manitoba', 'Louis', 'Canada', '738 Acati Manor', '11012'), 
(
'Huge House', 'description', 2, 'https://images.pexels.com/photos/2079695/pexels-photo-2079695.jpeg', 'https://images.pexels.com/photos/2079695/pexels-photo-2079695.jpeg?auto=compress&cs=tinysrgb&h=350', 21000, 1, 1, 5, true, 'Newfoundland And Labrador', 'Port', 'Canada', '1315 Zavevi Center', '10231'),
('Soon wide', 'description', 3, 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg', 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&h=350', 44534, 1, 6, 4, true, 'Manitoba', 'Neva', 'Canada', '51 Ufbik Highway', '60318');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2018-09-11', '2018-09-26', 1, 1),
('2019-01-04', '2019-02-01', 2, 2),
('2021-10-01', '2021-10-14', 3, 3);

INSERT INTO property_reviews (
guest_id, property_id, reservation_id, rating, message) 
VALUES (1, 1, 1, 4, 'Nice place'),
(2, 2, 2, 4, 'Huge Fun'),
(3, 3, 3, 3, 'Could have been better');



