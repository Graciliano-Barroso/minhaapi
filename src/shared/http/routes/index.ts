import { rolesRouter } from '@roles/http/routes/roules.routes'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Olá Dev!' })
})

routes.use('/roles', rolesRouter)

export { routes }
