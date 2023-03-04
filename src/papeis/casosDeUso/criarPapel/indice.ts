import { RepositorioDePapeis } from "@papeis/repositorios/RepositorioDePapeis";
import { CriarControladorDePapeis } from "./CriarControladorDePapel";
import { CriarUsoDeCasoDePapel } from "./CriarUsoDeCasoDePapel";

const repositorioDePapeis = new RepositorioDePapeis()
const criarUsoDeCasoDePapel = new CriarUsoDeCasoDePapel(repositorioDePapeis)
export const criarControladorDePapeis = new CriarControladorDePapeis(criarUsoDeCasoDePapel)
