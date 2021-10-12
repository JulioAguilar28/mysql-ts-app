import { Pool } from 'pg'

export const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'node_postgresql_ts',
  password: 'password',
  port: 5432,
})
