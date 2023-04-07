import { ControladorCarregarAvatar } from '@usuarios/casosDeUso/carregarAvatar/ControladorCarregarAvatar'
import { ControladorCriarLogin } from '@usuarios/casosDeUso/criarLogin/ControladorCriarLogin'
import { ControladorCriarUsuario } from '@usuarios/casosDeUso/criarUsuario/ControladorCriarUsuario'
import { ControladorListarUsuarios } from '@usuarios/casosDeUso/listarUsuario/ControladorListarUsuario'
import { ControladorMostrarPerfil } from '@usuarios/casosDeUso/mostrarPerfil/ControladorMostrarPerfil'
import { IRepositorioDeUsuarios } from '@usuarios/repositorios/IRepositorioDeUsuarios'
import { RepositorioDeUsuarios } from '@usuarios/repositorios/RepositorioDeUsuarios'
import { container } from 'tsyringe'

container.registerSingleton<IRepositorioDeUsuarios>(
  'RepositorioDeUsuarios',
  RepositorioDeUsuarios,
)

container.registerSingleton('ControladorCriarUsuario', ControladorCriarUsuario)
container.registerSingleton('ControladorListarUsuarios', ControladorListarUsuarios)
container.registerSingleton('ControladorCriarLogin', ControladorCriarLogin)
container.registerSingleton('ControladorCarregarAvatar', ControladorCarregarAvatar)
container.registerSingleton('ControladorMostrarPerfil', ControladorMostrarPerfil)
