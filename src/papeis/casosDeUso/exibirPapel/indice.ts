import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { CasoDeUsoDeExibirPapel } from './CasoDeUsoExibirPapel'
import { ControladorExibirPapel } from './ControladorExibirPapel'

const repositorioDePapeis = RepositorioDePapeis.obterInstancia()
const casoDeUsoDeExibirPapel = new CasoDeUsoDeExibirPapel(repositorioDePapeis)
export const controladorExibirPapel = new ControladorExibirPapel(casoDeUsoDeExibirPapel)
