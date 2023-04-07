import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import multer from 'multer'
import { heAutenticado } from '@compartilhado/http/middlewares/heAutenticado'
import { ControladorCriarLogin } from '@usuarios/casosDeUso/criarLogin/ControladorCriarLogin'
import { ControladorCriarUsuario } from '@usuarios/casosDeUso/criarUsuario/ControladorCriarUsuario'
import { ControladorListarUsuarios } from '@usuarios/casosDeUso/listarUsuario/ControladorListarUsuario'
import { ControladorCarregarAvatar } from '@usuarios/casosDeUso/carregarAvatar/ControladorCarregarAvatar'
import carregarConfig from '@config/carregar'
import { ControladorMostrarPerfil } from '@usuarios/casosDeUso/mostrarPerfil/ControladorMostrarPerfil'

const roteadorDeUsuarios = Router()
const controladorCriarUsuario = container.resolve(ControladorCriarUsuario)
const controladorListarUsuarios = container.resolve(ControladorListarUsuarios)
const controladorCriarLogin = container.resolve(ControladorCriarLogin)
const controladorCarregarAvatar = container.resolve(ControladorCarregarAvatar)
const controladorMostrarPerfil = container.resolve(ControladorMostrarPerfil)
const carregar = multer(carregarConfig)

roteadorDeUsuarios.post(
  '/',
  heAutenticado,
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      idade: Joi.number().integer().required(),
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

roteadorDeUsuarios.patch(
  '/avatar',
  heAutenticado,
  carregar.single('avatar'),
  (request, response) => {
    return controladorCarregarAvatar.executar(request, response)
  },
)

roteadorDeUsuarios.get('/perfil', heAutenticado, (request, response) => {
  return controladorMostrarPerfil.executar(request, response)
})

export { roteadorDeUsuarios }
