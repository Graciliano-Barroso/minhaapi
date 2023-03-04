import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { Router } from 'express'

const papeisDoRoteador = Router()
const repositorioDePapeis = new RepositorioDePapeis()

papeisDoRoteador.post('/', (request, response) => {
  const { nome, idade } = request.body
  const papelJaExiste = repositorioDePapeis.encontrarPeloNome(nome)
  const papel = repositorioDePapeis.create({ nome, idade })
  if (papelJaExiste) {
    return response.status(400).json({erro: 'O papel ja existe'})
  }

  return response.status(201).json(papel)
})

papeisDoRoteador.get('/', (request, response) => {
  const papeis = repositorioDePapeis.encontrarTudo()

  return response.json(papeis)
})

export { papeisDoRoteador }
