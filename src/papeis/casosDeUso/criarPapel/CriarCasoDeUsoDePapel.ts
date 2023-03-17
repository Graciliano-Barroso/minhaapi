import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Papel } from '@papeis/entidades/Papel'
import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'
import { injectable, inject } from 'tsyringe'

type CriarPapelDTO = {
  nome: string
  idade: number
}

@injectable()
export class CriarCasoDeUsoDePapel {
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
