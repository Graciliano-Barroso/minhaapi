import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { Router } from 'express'

const papeisDoRoteador = Router()
const repositorioDePapeis = new RepositorioDePapeis()

papeisDoRoteador.post('/', (request, response) => {
  const { nome, idade } = request.body
  const papel = repositorioDePapeis.create({ nome, idade })

  return response.status(201).json(papel)
})

papeisDoRoteador.get('/', (request, response) => {
  const papeis = repositorioDePapeis.findAll()

  return response.json(papeis)
})

export { papeisDoRoteador }
