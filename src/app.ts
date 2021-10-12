import express, { Application } from 'express'
import morgan from 'morgan'
import usersRouter from './users/users.routes'

enum Settings {
  port = 'port',
}

export class App {
  private app: Application

  constructor(private port?: number) {
    this.app = express()
    this.settings()
    this.middlawares()
    this.routes()
  }

  settings() {
    this.app.set(Settings.port, this.port || 3000)
  }

  middlawares() {
    this.app.use(morgan('dev'))
    this.app.use(express.json())
  }

  routes() {
    this.app.use('/users', usersRouter)
  }

  listen() {
    this.app.listen(this.app.get(Settings.port))
    console.log(`Server on port ${this.app.get(Settings.port)}`)
  }
}
