import { inject, injectable } from 'tsyringe'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Papel } from '@papeis/entidades/Papel'
import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'

type ParametrosExibirPapel = {
  id: string
}

@injectable()
export class CasoDeUsoExibirPapel {
  constructor(
    @inject('RepositorioDePapeis')
    private repositorioDePapeis: IRepositorioDePapeis,
  ) {}
  async execute({ id }: ParametrosExibirPapel): Promise<Papel> {
    const papel = await this.repositorioDePapeis.encontrarPeloId(id)
    if (!papel) {
      throw new ErroDeAplicativo('Papel não encontrado', 404)
    }
    return papel
  }
}
