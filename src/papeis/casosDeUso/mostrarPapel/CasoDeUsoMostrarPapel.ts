import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Papel } from '@papeis/entidades/Papel'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'

type ParametrosMostarPapel = {
  id: string
}

export class CasoDeUsoDeMostrarPapel {
  constructor(private repositorioDePapeis: RepositorioDePapeis) {}
  async execute({ id }: ParametrosMostarPapel): Promise<Papel> {
    const papel = await this.repositorioDePapeis.encontrarPeloId(id)
    if (!papel) {
      throw new ErroDeAplicativo('Papel não encontrado', 404)
    }
    return papel
  }
}
