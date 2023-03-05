import { RepositorioDePapeis } from "@papeis/repositorios/RepositorioDePapeis";
import { ListarPapeisDeCasoDeUso } from "./ListarPapeisDeCasoDeUso";
import { ListarPapeisDoControlador } from "./ListarPapeisDoControlador";

const repositorioDePapeis = new RepositorioDePapeis()
const listarPapeisDeCasoDeUso = new ListarPapeisDeCasoDeUso(repositorioDePapeis)
export const listarPapeisDoControlador = new ListarPapeisDoControlador(listarPapeisDeCasoDeUso)
