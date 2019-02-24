CREATE DATABASE evacuee_data;
\c evacuee_data;

CREATE TABLE IF NOT EXISTS evacuee_data (
    id SERIAL PRIMARY KEY,
    geo text, 
    med BOOLEAN,
    food BOOLEAN
);
