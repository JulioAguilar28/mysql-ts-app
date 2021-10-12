import { Pool } from 'pg'

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'node_postgresql_ts',
  password: 'password',
  port: 5432,
})
