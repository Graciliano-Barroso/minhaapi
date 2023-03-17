import { inject, injectable } from 'tsyringe'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Papel } from '@papeis/entidades/Papel'
import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'

type AtualizarPapelDTO = {
  id: string
  nome: string
  idade: number
}

@injectable()
export class AtualizarPapelDeCasoDeUso {
  constructor(
    @inject('RepositorioDePapeis')
    private repositorioDePapeis: IRepositorioDePapeis,
  ) {}
  async execute({ id, nome }: AtualizarPapelDTO): Promise<Papel> {
    const papel = await this.repositorioDePapeis.encontrarPeloId(id)
    if (!papel) {
      throw new ErroDeAplicativo('Papel não encontrado', 404)
    }
    const papelComOMesmoNome = await this.repositorioDePapeis.encontrarPeloNome(nome)
    if (papelComOMesmoNome && papel.nome != papelComOMesmoNome.nome) {
      throw new ErroDeAplicativo('Nome do papel não foi informado ou está em uso')
    }
    papel.nome = nome
    return this.repositorioDePapeis.salvar(papel)
  }
}
