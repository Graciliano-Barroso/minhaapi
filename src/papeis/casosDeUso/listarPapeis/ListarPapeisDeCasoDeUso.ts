import { Papel } from '@papeis/entidades/Papel'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'

export class ListarPapeisDeCasoDeUso {
  constructor(private repositorioDePapeis: RepositorioDePapeis) {}

  execute(): Papel[] {
    return this.repositorioDePapeis.encontrarTudo()
  }
}
