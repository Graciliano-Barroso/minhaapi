import {
  IRepositorioDePapeis,
  PropriedadesDePaginacaoDePapeis,
} from '@papeis/repositorios/IRepositorioDePapeis'
import { inject, injectable } from 'tsyringe'

type ParametrosDeListaDePapeisDeCasoDeUso = {
  pagina: number
  limite: number
}

@injectable()
export class ListarPapeisDeCasoDeUso {
  constructor(
    @inject('RepositorioDePapeis') private repositorioDePapeis: IRepositorioDePapeis,
  ) {}

  async execute({
    limite,
    pagina,
  }: ParametrosDeListaDePapeisDeCasoDeUso): Promise<PropriedadesDePaginacaoDePapeis> {
    const pegar = limite
    const pular = (Number(pagina) - 1) * pegar
    return this.repositorioDePapeis.encontrarTudo({
      pagina,
      pular,
      pegar,
    })
  }
}
