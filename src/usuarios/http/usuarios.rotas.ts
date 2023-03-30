import { ControladorCriarUsuario } from '@usuarios/casosDeUso/criarUsuario/ControladorCriarUsuario'
import { ControladorListarUsuarios } from '@usuarios/casosDeUso/listarUsuario/ControladorListarUsuario'
import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { container } from 'tsyringe'

const roteadorDeUsuarios = Router()
const controladorCriarUsuario = container.resolve(ControladorCriarUsuario)
const controladorListarUsuarios = container.resolve(ControladorListarUsuarios)

roteadorDeUsuarios.post(
  '/',
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

export { roteadorDeUsuarios }
