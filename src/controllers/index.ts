import { Router, Response, Request } from 'express'

const indexRouter = Router()

indexRouter.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Welcome to building an API with Postgresql and Typescript</h1>')
})

export default indexRouter
