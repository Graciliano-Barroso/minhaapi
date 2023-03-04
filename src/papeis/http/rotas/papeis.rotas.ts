import { criarControladorDePapeis } from '@papeis/casosDeUso/criarPapel/indice'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { Router } from 'express'

const papeisDoRoteador = Router()
const repositorioDePapeis = new RepositorioDePapeis()

papeisDoRoteador.post('/', (request, response) => {
  return criarControladorDePapeis.executar(request, response)
})

papeisDoRoteador.get('/', (request, response) => {
  const papeis = repositorioDePapeis.encontrarTudo()

  return response.json(papeis)
})

export { papeisDoRoteador }
