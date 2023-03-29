import { roteadorDePapeis } from '@papeis/http/rotas/papeis.rotas'
import { roteadorDeUsuarios } from '@usuarios/http/usuarios.rotas'
import { Router } from 'express'

const rotas = Router()

rotas.get('/', (request, response) => {
  return response.json({ mensagem: 'Olá Dev!' })
})

rotas.use('/papeis', roteadorDePapeis)
rotas.use('/usuarios', roteadorDeUsuarios)

export { rotas }
