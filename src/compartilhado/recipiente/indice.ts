import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { container } from 'tsyringe'

container.registerSingleton<IRepositorioDePapeis>(
  'RepositorioDePapeis',
  RepositorioDePapeis,
)
