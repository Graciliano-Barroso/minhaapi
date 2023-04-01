import { heAutenticado } from '@compartilhado/http/middlewares/heAutenticado'
import { ControladorCriarLogin } from '@usuarios/casosDeUso/criarLogin/ControladorCriarLogin'
import { ControladorCriarUsuario } from '@usuarios/casosDeUso/criarUsuario/ControladorCriarUsuario'
import { ControladorListarUsuarios } from '@usuarios/casosDeUso/listarUsuario/ControladorListarUsuario'
import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { container } from 'tsyringe'

const roteadorDeUsuarios = Router()
const controladorCriarUsuario = container.resolve(ControladorCriarUsuario)
const controladorListarUsuarios = container.resolve(ControladorListarUsuarios)
const controladorCriarLogin = container.resolve(ControladorCriarLogin)

roteadorDeUsuarios.post(
  '/',
  heAutenticado,
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      idade: Joi.number().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      papelId: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return controladorCriarUsuario.executar(request, response)
  },
)

roteadorDeUsuarios.get(
  '/',
  heAutenticado,
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number(),
      limit: Joi.number(),
    },
  }),
  (request, response) => {
    return controladorListarUsuarios.executar(request, response)
  },
)

roteadorDeUsuarios.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      senha: Joi.string().required(),
    },
  }),
  (request, response) => {
    return controladorCriarLogin.executar(request, response)
  },
)

export { roteadorDeUsuarios }
