import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Papel } from '@papeis/entidades/Papel'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'

type CriarPapelDTO = {
  nome: string
  idade: number
}

export class CriarUsoDeCasoDePapel {
  constructor(private repositorioDePapeis: RepositorioDePapeis) {}
  execute({ nome, idade }: CriarPapelDTO): Papel {
    const papelJaExiste = this.repositorioDePapeis.encontrarPeloNome(nome)
    if (papelJaExiste) {
      throw new ErroDeAplicativo('O papel ja existe')
    }
    return this.repositorioDePapeis.criar({ nome, idade })
  }
}
