import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Papel } from '@papeis/entidades/Papel'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'

type ParametrosExibirPapel = {
  id: string
}

export class CasoDeUsoDeExibirPapel {
  constructor(private repositorioDePapeis: RepositorioDePapeis) {}
  async execute({ id }: ParametrosExibirPapel): Promise<Papel> {
    const papel = await this.repositorioDePapeis.encontrarPeloId(id)
    if (!papel) {
      throw new ErroDeAplicativo('Papel não encontrado', 404)
    }
    return papel
  }
}
