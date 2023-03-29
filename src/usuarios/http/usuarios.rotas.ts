import { ControladorCriarUsuario } from '@usuarios/casosDeUso/criarUsuario/ControladorCriarUsuario'
import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { container } from 'tsyringe'

const roteadorDeUsuarios = Router()
const controladorCriarUsuario = container.resolve(ControladorCriarUsuario)

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
    return controladorCriarUsuario.handle(request, response)
  },
)

export { roteadorDeUsuarios }
