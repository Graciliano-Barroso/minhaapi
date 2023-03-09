import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { CriarControladorDePapeis } from './CriarControladorDePapel'
import { CriarUsoDeCasoDePapel } from './CriarUsoDeCasoDePapel'

const repositorioDePapeis = RepositorioDePapeis.obterInstancia()
const criarUsoDeCasoDePapel = new CriarUsoDeCasoDePapel(repositorioDePapeis)
export const criarControladorDePapeis = new CriarControladorDePapeis(
  criarUsoDeCasoDePapel,
)
