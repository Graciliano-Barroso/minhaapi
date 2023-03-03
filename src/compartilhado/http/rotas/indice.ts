import { papeisDoRoteador } from '@papeis/http/rotas/papeis.rotas'
import { Router } from 'express'

const rotas = Router()

rotas.get('/', (request, response) => {
  return response.json({ mensagem: 'Olá Dev!' })
})

rotas.use('/papeis', papeisDoRoteador)

export { rotas }
