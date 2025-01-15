#! /usr/bin/env node

import pkg from "pg";
const { Client } = pkg;
import "dotenv/config";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR ( 50 ),
  text VARCHAR ( 300 ),
  added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (author, text) VALUES 
  ('Charlie', 'How are you?'),
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!'),
  ('James', 'Good Morning'),
  ('Dana', 'I am fine, thank you!');

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}?sslmode=require`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
