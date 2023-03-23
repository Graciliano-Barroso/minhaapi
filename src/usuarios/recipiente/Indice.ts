import { IRepositorioDeUsuarios } from '@usuarios/repositorios/IRepositorioDeUsuarios'
import { RepositorioDeUsuario } from '@usuarios/repositorios/RepositorioDeUsuarios'
import { container } from 'tsyringe'

container.registerSingleton<IRepositorioDeUsuarios>(
  'RepositorioDeUsuario',
  RepositorioDeUsuario,
)
