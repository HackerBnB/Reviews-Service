DROP KEYSPACE IF EXISTS homelyReviews;

CREATE KEYSPACE homelyReviews 
WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };


CREATE COLUMNFAMILY ROOMS(
  roomId INT,
  roomName VARCHAR,
  PRIMARY KEY(roomId)
);
  
COPY ROOMS (roomId, roomName) from '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-1.csv' with HEADER = TRUE;

CREATE COLUMNFAMILY REVIEWS (
  id INT,
  userId INT,
  roomId INT,
  created_at VARCHAR,
  review_text VARCHAR,
  accuracy_rating INT,
  communication_rating INT,
  cleanliness_rating INT,
  location_rating INT,
  check_in_rating INT,
  value_rating INT,
  is_reported boolean,
  PRIMARY KEY(id)
);

CREATE COLUMNFAMILY USERS (
  id INT,
  userName VARCHAR,
  image_url VARCHAR,
  PRIMARY KEY(id)
);

COPY USERS (id, userName, image_url) from '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-3.csv' with HEADER = TRUE;
COPY REVIEWS (id, userId, roomId, created_at, review_text, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) from '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-1.csv' with HEADER = TRUE;
COPY REVIEWS (id, userId, roomId, created_at, review_text, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) from '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-2.csv' with HEADER = FALSE;
COPY REVIEWS (id, userId, roomId, created_at, review_text, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) from '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-3.csv' with HEADER = FALSE;


-- COPY ROOMS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-1.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY USERS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-3.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-1.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-2.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-3.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-4.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-5.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-6.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-7.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-8.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-9.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY REVIEWS FROM '/Users/priyasuresh/documents/Reviews-Service/data-gen-table-2-part-10.csv' WITH DELIMITER ',' CSV HEADER;

