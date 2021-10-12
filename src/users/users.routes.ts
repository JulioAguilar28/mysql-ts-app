import { Router } from 'express'
import { getUsers } from './controller'

const usersRouter = Router()

usersRouter.route('/').get(getUsers).post()

usersRouter.route('/:id').get().put().delete()

export default usersRouter
