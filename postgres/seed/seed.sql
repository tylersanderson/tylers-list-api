BEGIN TRANSACTION;

INSERT into users (name, email, joined) values ('Demo Account', 'demo@demo.com', '2018-01-01');
INSERT into login (hash, email) values ('$2a$10$uHD3nRhVFMgh6rBh0zvH/egpIW6Dm9PAVVrl7xg3JqtWsCmiVwsgK', 'demo@demo.com');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100121', 'One Memorial Stadium Drive', 'Maintenance requested on stadium screens', 'Order Notes for 100121...', false, '40.8206', '-96.7056');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100122', '1445 K St', 'Sower statue requires renovation', 'Order Notes for 100122...', false, '40.8081', '-96.6997');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100123', '1222 S 27th St', 'Zoo animals escaped', 'Order Notes for 100123...', false, '40.8006', '-96.6795');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100124', '1600 S 48th St', 'Hospital heliport needs resurfaced', 'Order Notes for 100124...', false, '40.47451800', '-96.39071700');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100125', '2300 S 16th St', 'Repairs need to the flux capacitor', 'Order Notes for 100125...', false, '40.790185', '-96.698142');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100126', '6100 O St', 'Doc Brown having trouble with 1985 DeLorean', 'Order Notes for 100126...', false, '40.815737', '-96.636109');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100127', '555 S 70th St', 'Voice box repairs needed for Mr. Vader', 'Order Notes for 100127...', false, '40.808101', '-96.627339');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100128', '3201 S Coddington Ave', 'Mr. Hut requests a new Sarlacc pit', 'Order Notes for 100128...', false, '40.774238', '-96.777671');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100129', '2021 Transformation Dr', 'Jetpack requires maintenance for Boba', 'Order Notes for 100129...', false, '40.832757', '-96.692750');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete, orderLat, orderLong) values ('100130', '12000 West Branched Oak Rd', 'Repairs needed, there are. Requested by Mr. Yoda', 'Order Notes for 100130...', false, '40.972434', '-96.869421');


COMMIT;
