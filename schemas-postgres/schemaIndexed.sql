-- SELECT pg_terminate_backend(pid)
-- FROM pg_stat_get_activity(NULL::integer)
-- WHERE datid=(SELECT oid from pg_database where datname = 'homelyre');



DROP DATABASE IF EXISTS homelyre;

CREATE DATABASE homelyre;

\c homelyre;


 CREATE TABLE ROOMS (
  roomId INT NOT NULL PRIMARY KEY,
  roomName VARCHAR(10000010)
 );

 CREATE TABLE REVIEWS (
   id INT NOT NULL PRIMARY KEY,
   userId INT NOT NULL,
   roomId INT NOT NULL,
   created_at VARCHAR(250),
   review_text VARCHAR(65000),
   accuracy_rating INT NOT NULL,
   communication_rating INT NOT NULL,
   cleanliness_rating INT NOT NULL,
   location_rating INT NOT NULL,
   check_in_rating INT NOT NULL,
   value_rating INT NOT NULL,
   is_reported BOOL
 );

 CREATE TABLE USERS (
   id INT NOT NULL PRIMARY KEY,
   userName VARCHAR(100),
   image_url VARCHAR(100)
);


-- COPY ROOMS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-1.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY USERS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-3.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-1.csv' WITH DELIMITER ',' CSV HEADER;
--COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-2.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-3.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-4.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-5.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-6.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-7.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-8.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-9.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-10.csv' WITH DELIMITER ',' CSV HEADER;

-- SELECT * FROM information_schema.columns WHERE table_schema = homelyre AND table_name   = reviews;
-- 