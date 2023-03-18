import { ControladorAtualizarPapel } from '@papeis/casosDeUso/atualizarPapel/ControladorAtualizarPapel'
import { ControladorCriarPapel } from '@papeis/casosDeUso/criarPapel/ControladorCriarPapel'
import { ControladorExcluirPapel } from '@papeis/casosDeUso/excluirPapel/ControladorExcluirPapel'
import { ControladorExibirPapel } from '@papeis/casosDeUso/exibirPapel/ControladorExibirPapel'
import { ControladorListarPapel } from '@papeis/casosDeUso/listarPapeis/ControladorListarPapel'
import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { container } from 'tsyringe'

container.registerSingleton<IRepositorioDePapeis>(
  'RepositorioDePapeis',
  RepositorioDePapeis,
)
container.registerSingleton('ControladorCriarPapel', ControladorCriarPapel)
container.registerSingleton('CriarControladorDePapeis', ControladorListarPapel)
container.registerSingleton('ControladorExibirPapel', ControladorExibirPapel)
container.registerSingleton('ControladorAtualizarPapel', ControladorAtualizarPapel)
container.registerSingleton('ControladorExcluirPapel', ControladorExcluirPapel)
