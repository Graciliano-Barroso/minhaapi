import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'

type ParametrosExcluirPapel = {
  id: string
}

export class CasoDeUsoDeExcluirPapel {
  constructor(private repositorioDePapeis: RepositorioDePapeis) {}
  async execute({ id }: ParametrosExcluirPapel): Promise<void> {
    const papel = await this.repositorioDePapeis.encontrarPeloId(id)
    if (!papel) {
      throw new ErroDeAplicativo('Papel não encontrado', 404)
    }
    await this.repositorioDePapeis.excluir(papel)
  }
}
