-- Drop existing databases if they exist
\c postgres

DROP DATABASE IF EXISTS community_test;
DROP DATABASE IF EXISTS community;

-- Create new databases
CREATE DATABASE community_test;
CREATE DATABASE community;

-- Connect to the community_test database and set up ENUM type
-- Run the following commands in a new psql session for community_test:
\c community_test;

CREATE TYPE REQUEST_STATUS AS ENUM ('active', 'completed', 'closed', 'agreed');
CREATE TYPE OFFER_STATUS AS ENUM ('accepted', 'declined', 'active');

-- Connect to the community database and set up ENUM type
-- Run the following commands in a new psql session for community:
\c community;

CREATE TYPE REQUEST_STATUS AS ENUM ('active', 'completed', 'closed', 'agreed');
CREATE TYPE OFFER_STATUS AS ENUM ('accepted', 'declined', 'active');
