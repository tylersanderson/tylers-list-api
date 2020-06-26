BEGIN TRANSACTION;

INSERT into users (name, email, joined) values ('Demo Account', 'demo@demo.com', '2018-01-01');
INSERT into login (hash, email) values ('$2a$10$uHD3nRhVFMgh6rBh0zvH/egpIW6Dm9PAVVrl7xg3JqtWsCmiVwsgK', 'demo@demo.com');
INSERT into gigs (gignumber, gigname, gigpay, street, city, stateabv, zipcode, gignotes, isgigcomplete, gigimage) values ('1', 'Tree Trimming', '100', '1000 Main St', 'Lincoln', 'NE', '68510', 'Multiple trees need trimmming', false, 'https://www.organicconsumers.org/sites/default/files/bigstock-old-oak-tree-on-meadows-a-fie-256109641.jpg');


COMMIT;