import { inject, injectable } from 'tsyringe'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'

type ParametrosExcluirPapel = {
  id: string
}

@injectable()
export class CasoDeUsoDeExcluirPapel {
  constructor(
    @inject('RepositorioDePapeis')
    private repositorioDePapeis: IRepositorioDePapeis,
  ) {}
  async execute({ id }: ParametrosExcluirPapel): Promise<void> {
    const papel = await this.repositorioDePapeis.encontrarPeloId(id)
    if (!papel) {
      throw new ErroDeAplicativo('Papel não encontrado', 404)
    }
    await this.repositorioDePapeis.excluir(papel)
  }
}
