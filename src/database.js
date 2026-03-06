import dotenv from "dotenv";
dotenv.config();

const env = process.env

import pkg from "pg";

const { Pool } = pkg;

export const pool = new Pool({
    host: env.POSTGRESQL_HOST,
    port: env.POSTGRESQL_PORT,
    user: env.POSTGRESQL_USER,
    password: env.POSTGRESQL_PASSWORD,
    database: env.POSTGRESQL_DATABASE
});