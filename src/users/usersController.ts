import { Request, Response } from 'express'
import { pool } from '../database'

export const getUsers = (_request: Request, response: Response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) throw error
    response.status(200).json(results.rows)
  })
}

export const getUserById = (request: Request, response: Response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, result) => {
    if (error) throw error
    response.status(200).json(result.rows)
  })
}
