import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { CasoDeUsoDeMostrarPapel } from './CasoDeUsoMostrarPapel'
import { ControladorMostrarPapel } from './ControladorMostrarPapel'

const repositorioDePapeis = RepositorioDePapeis.obterInstancia()
const casoDeUsoMostrarPapel = new CasoDeUsoDeMostrarPapel(repositorioDePapeis)
export const controladorMostrarPapel = new ControladorMostrarPapel(
  casoDeUsoMostrarPapel,
)
