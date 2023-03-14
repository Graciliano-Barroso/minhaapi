import { atualizarPapelDoControlador } from './../../casosDeUso/atualizarPapel/indice'
import { criarControladorDePapeis } from '@papeis/casosDeUso/criarPapel/indice'
import { listarPapeisDoControlador } from '@papeis/casosDeUso/listarPapeis/indice'
import { controladorExibirPapel } from '@papeis/casosDeUso/exibirPapel/indice'
import { controladorExcluirPapel } from '@papeis/casosDeUso/excluirPapel/indice'
import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

const papeisDoRoteador = Router()

papeisDoRoteador.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      idade: Joi.number().integer(),
    }),
  }),
  (request, response) => {
    return criarControladorDePapeis.executar(request, response)
  },
)

papeisDoRoteador.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request, response) => {
    return listarPapeisDoControlador.executar(request, response)
  },
)

papeisDoRoteador.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return controladorExibirPapel.executar(request, response)
  },
)

papeisDoRoteador.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      idade: Joi.number().integer(),
    }),
  }),
  (request, response) => {
    return atualizarPapelDoControlador.executar(request, response)
  },
)

papeisDoRoteador.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return controladorExcluirPapel.executar(request, response)
  },
)

export { papeisDoRoteador }
