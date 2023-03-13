import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { CasoDeUsoDeExcluirPapel } from './CasoDeUsoExcluirPapel'
import { ControladorExcluirPapel } from './ControladorExcluirPapel'

const repositorioDePapeis = RepositorioDePapeis.obterInstancia()
const casoDeUsoDeExcluirPapel = new CasoDeUsoDeExcluirPapel(repositorioDePapeis)
export const controladorExcluirPapel = new ControladorExcluirPapel(
  casoDeUsoDeExcluirPapel,
)
