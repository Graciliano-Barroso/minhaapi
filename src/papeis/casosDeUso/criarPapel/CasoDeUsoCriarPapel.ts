import { injectable, inject } from 'tsyringe'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Papel } from '@papeis/entidades/Papel'
import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'

type CriarPapelDTO = {
  nome: string
  idade: number
}

@injectable()
export class CasoDeUsoCriarPapel {
  constructor(
    @inject('RepositorioDePapeis') private repositorioDePapeis: IRepositorioDePapeis,
  ) {}
  async execute({ nome, idade }: CriarPapelDTO): Promise<Papel> {
    const papelJaExiste = await this.repositorioDePapeis.encontrarPeloNome(nome)
    if (papelJaExiste) {
      throw new ErroDeAplicativo('O papel ja existe')
    }
    return this.repositorioDePapeis.criar({ nome, idade })
  }
}
