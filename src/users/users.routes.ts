import { Router } from 'express'
import * as UsersController from './usersController'

const usersRouter = Router()

usersRouter.route('/').get(UsersController.getUsers).post()

usersRouter.route('/:id').get(UsersController.getUserById).put().delete()

export default usersRouter
