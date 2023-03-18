import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import { ControladorCriarPapel } from '@papeis/casosDeUso/criarPapel/ControladorCriarPapel'
import { ControladorListarPapel } from '@papeis/casosDeUso/listarPapeis/ControladorListarPapel'
import { ControladorExibirPapel } from '@papeis/casosDeUso/exibirPapel/ControladorExibirPapel'
import { ControladorAtualizarPapel } from '@papeis/casosDeUso/atualizarPapel/ControladorAtualizarPapel'
import { ControladorExcluirPapel } from '@papeis/casosDeUso/excluirPapel/ControladorExcluirPapel'

const papeisDoRoteador = Router()
const controladorCriarPapel = container.resolve(ControladorCriarPapel)
const controladorListarPapel = container.resolve(ControladorListarPapel)
const controladorExibirPapel = container.resolve(ControladorExibirPapel)
const controladorAtualizarPapel = container.resolve(ControladorAtualizarPapel)
const controladorExcluirPapel = container.resolve(ControladorExcluirPapel)

papeisDoRoteador.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      idade: Joi.number().integer(),
    }),
  }),
  (request, response) => {
    return controladorCriarPapel.executar(request, response)
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
    return controladorListarPapel.executar(request, response)
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
    return controladorAtualizarPapel.executar(request, response)
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
