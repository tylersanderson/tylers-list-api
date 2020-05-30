BEGIN TRANSACTION;

INSERT into users (name, email, joined) values ('Demo Account', 'demo@demo.com', '2018-01-01');
INSERT into login (hash, email) values ('$2a$10$uHD3nRhVFMgh6rBh0zvH/egpIW6Dm9PAVVrl7xg3JqtWsCmiVwsgK', 'demo@demo.com');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100121', 'One Memorial Stadium Drive', 'Maintenance requested on stadium screens', 'Order Notes for 100121...', false, '40.8206', '-96.7056');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100122', '1445 K St', 'Sower statue requires renovation', 'Order Notes for 100122...', false, '40.8081', '-96.6997');
INSERT into gigs (gigNumber, gigName, gigPay, street, city, stateabv, zipcode, gigNotes, isGigComplete) values ('1', 'Tree Trimming', '100', '1000 Main St', 'Lincoln', 'NE', '68510', 'Multiple trees need trimmming', false);


COMMIT;