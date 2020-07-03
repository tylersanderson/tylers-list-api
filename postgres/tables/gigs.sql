BEGIN TRANSACTION;

CREATE TABLE gigs (
	gignumber serial PRIMARY KEY,
	gigname VARCHAR(40),
  gigpay VARCHAR(6),
  street VARCHAR(30),
  city VARCHAR(15),
  stateabv VARCHAR(2),
  zipcode VARCHAR(5), 
	gignotes VARCHAR(500),
	isgigcomplete boolean,
  gigpostedby VARCHAR(10),
  gigassignedto VARCHAR(10),
  gigimage VARCHAR(500)
);

COMMIT;