import { roteadorDePapeis } from '@papeis/http/rotas/rotas.papeis'
import { roteadorDeUsuarios } from '@usuarios/http/rotas.usuarios'
import { Router } from 'express'

const rotas = Router()

rotas.get('/', (request, response) => {
  return response.json({ mensagem: 'Olá Dev!' })
})

rotas.use('/papeis', roteadorDePapeis)
rotas.use('/usuarios', roteadorDeUsuarios)

export { rotas }
