import { AtualizarPapelDeCasoDeUso } from './AtualizarPapelDeCasoDeUso'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { AtualizarPapelDoControlador } from './AtualizarPapelDoControlador'

const repositorioDePapeis = RepositorioDePapeis.obterInstancia()
const atualizarPapelDeCasoDeUso = new AtualizarPapelDeCasoDeUso(repositorioDePapeis)
export const atualizarPapelDoControlador = new AtualizarPapelDoControlador(
  atualizarPapelDeCasoDeUso,
)
