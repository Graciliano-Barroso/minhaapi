import { criarControladorDePapeis } from '@papeis/casosDeUso/criarPapel/indice'
import { listarPapeisDoControlador } from '@papeis/casosDeUso/listarPapeis/indice'
import { Router } from 'express'

const papeisDoRoteador = Router()

papeisDoRoteador.post('/', (request, response) => {
  return criarControladorDePapeis.executar(request, response)
})

papeisDoRoteador.get('/', (request, response) => {
  return listarPapeisDoControlador.executar(request, response)
})

export { papeisDoRoteador }
