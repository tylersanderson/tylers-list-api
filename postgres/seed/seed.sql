BEGIN TRANSACTION;

INSERT into users (name, email, joined) values ('Demo Account', 'demo@demo.com', '2018-01-01');
INSERT into login (hash, email) values ('$2a$10$uHD3nRhVFMgh6rBh0zvH/egpIW6Dm9PAVVrl7xg3JqtWsCmiVwsgK', 'demo@demo.com');
INSERT into gigs (gignumber, gigname, gigpay, street, city, stateabv, zipcode, gignotes, isgigcomplete, gigimage) values ('1', 'Tree Trimming', '100', '1000 Main St', 'Lincoln', 'NE', '68510', 'Multiple trees need trimmming', false, 'https://www.organicconsumers.org/sites/default/files/bigstock-old-oak-tree-on-meadows-a-fie-256109641.jpg');
INSERT into gigs (gignumber, gigname, gigpay, street, city, stateabv, zipcode, gignotes, isgigcomplete, gigimage) values ('2', 'Landscaping', '200', '1500 Main St', 'Lincoln', 'NE', '68512', 'Trees and bushes need to be trimmed', false, 'https://www.inchcalculator.com/wp-content/uploads/2018/08/land-acreage-horses-pasture.jpg');
INSERT into gigs (gignumber, gigname, gigpay, street, city, stateabv, zipcode, gignotes, isgigcomplete, gigimage) values ('3', 'Programming, C++, .NET, Java skills', '300', '2000 Main St', 'Lincoln', 'NE', '68515', 'Experienced programmer needed with C++, .NET and Java skills', false, 'http://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg');
INSERT into gigs (gignumber, gigname, gigpay, street, city, stateabv, zipcode, gignotes, isgigcomplete, gigimage) values ('4', 'Web Development, Full Stack', '400', '2500 Main St', 'Lincoln', 'NE', '68516', 'Full stack web developer needed to build web app', false, 'https://techlaunch.io/blog/wp-content/uploads/2018/01/web-development-skills.jpg');
INSERT into gigs (gignumber, gigname, gigpay, street, city, stateabv, zipcode, gignotes, isgigcomplete, gigimage) values ('5', 'House Painting', '500', '3000 Main St', 'Lincoln', 'NE', '68518', 'House needs painted', false, 'https://m5son.files.wordpress.com/2013/07/country-home.jpg');


COMMIT;