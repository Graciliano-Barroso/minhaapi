import { atualizarPapelDoControlador } from './../../casosDeUso/atualizarPapel/indice'
import { criarControladorDePapeis } from '@papeis/casosDeUso/criarPapel/indice'
import { listarPapeisDoControlador } from '@papeis/casosDeUso/listarPapeis/indice'
import { controladorMostrarPapel } from '@papeis/casosDeUso/mostrarPapel/indice'
import { Router } from 'express'

const papeisDoRoteador = Router()

papeisDoRoteador.post('/', (request, response) => {
  return criarControladorDePapeis.executar(request, response)
})

papeisDoRoteador.get('/', (request, response) => {
  return listarPapeisDoControlador.executar(request, response)
})

papeisDoRoteador.get('/:id', (request, response) => {
  return controladorMostrarPapel.executar(request, response)
})

papeisDoRoteador.put('/:id', (request, response) => {
  return atualizarPapelDoControlador.executar(request, response)
})

export { papeisDoRoteador }
