import { App } from './app'

const PORT = 3000

const main = () => {
  const app = new App(PORT)
  app.listen()
}

main()
