BEGIN TRANSACTION;

CREATE TABLE gigs (
	gigNumber serial PRIMARY KEY,
	gigName VARCHAR(40),
  gigPay VARCHAR(6),
  street VARCHAR(30),
  city VARCHAR(15),
  stateabv VARCHAR(2),
  zipcode VARCHAR(5), 
	gigNotes VARCHAR(500),
	isGigComplete boolean
);

COMMIT;