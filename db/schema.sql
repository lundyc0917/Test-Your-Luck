-- Drop the luckTester db if it already exists. --
DROP DATABASE IF EXISTS luck_db;
-- Create the luckTester db --
CREATE DATABASE luck_db;

-- USE luck_db;

-- CREATE TABLE odds(
--     id INT NOT NULL AUTO_INCREMENT,
--     team1 VARCHAR (50) NOT NULL,
--     team2 VARCHAR (50) NOT NULL,
--     selections VARCHAR (50) NOT NULL,
--     result VARCHAR (50) NOT NULL,
--     betAmount INT default 0,
--     newAmount INT default 0,
--     PRIMARY KEY (id)
-- );