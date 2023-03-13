import { atualizarPapelDoControlador } from './../../casosDeUso/atualizarPapel/indice'
import { criarControladorDePapeis } from '@papeis/casosDeUso/criarPapel/indice'
import { listarPapeisDoControlador } from '@papeis/casosDeUso/listarPapeis/indice'
import { controladorExibirPapel } from '@papeis/casosDeUso/exibirPapel/indice'
import { Router } from 'express'
import { controladorExcluirPapel } from '@papeis/casosDeUso/excluirPapel/indice'

const papeisDoRoteador = Router()

papeisDoRoteador.post('/', (request, response) => {
  return criarControladorDePapeis.executar(request, response)
})

papeisDoRoteador.get('/', (request, response) => {
  return listarPapeisDoControlador.executar(request, response)
})

papeisDoRoteador.get('/:id', (request, response) => {
  return controladorExibirPapel.executar(request, response)
})

papeisDoRoteador.put('/:id', (request, response) => {
  return atualizarPapelDoControlador.executar(request, response)
})

papeisDoRoteador.delete('/:id', (request, response) => {
  return controladorExcluirPapel.executar(request, response)
})

export { papeisDoRoteador }
