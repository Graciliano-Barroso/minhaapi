import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { CriarControladorDePapeis } from './CriarControladorDePapel'
import { CriarUsoDeCasoDePapel } from './CriarCasoDeUsoDePapel'

const repositorioDePapeis = RepositorioDePapeis.obterInstancia()
const criarUsoDeCasoDePapel = new CriarUsoDeCasoDePapel(repositorioDePapeis)
export const criarControladorDePapeis = new CriarControladorDePapeis(
  criarUsoDeCasoDePapel,
)
