BEGIN TRANSACTION;

CREATE TABLE orders (
	orderNumber serial PRIMARY KEY,
	address VARCHAR(100),
	description VARCHAR(50),
	orderNotes VARCHAR(500),
	isOrderComplete boolean,
	orderLat NUMERIC(15,13),
	orderLong NUMERIC(15,13)
);

COMMIT;