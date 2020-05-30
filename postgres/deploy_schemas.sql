-- Deploy fresh database tables
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'
\i '/docker-entrypoint-initdb.d/tables/orders.sql'
\i '/docker-entrypoint-initdb.d/tables/gigs.sql'

\i '/docker-entrypoint-initdb.d/seed/seed.sql'