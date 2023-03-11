import {
  PropriedadesDePaginacaoDePapeis,
  RepositorioDePapeis,
} from '@papeis/repositorios/RepositorioDePapeis'

type ParametrosDeListaDePapeisDeCasoDeUso = {
  pagina: number
  limite: number
}

export class ListarPapeisDeCasoDeUso {
  constructor(private repositorioDePapeis: RepositorioDePapeis) {}

  async execute({
    pagina,
    limite,
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
