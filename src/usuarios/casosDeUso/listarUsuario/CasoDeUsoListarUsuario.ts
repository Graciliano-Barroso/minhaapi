import { inject, injectable } from 'tsyringe'
import {
  IRepositorioDeUsuarios,
  PropriedadesDePaginacaoDeUsuario,
} from '@usuarios/repositorios/IRepositorioDeUsuarios'

type ParametrosDeCasoDeUsoListarUsuario = {
  pagina: number
  limite: number
}

@injectable()
export class CasoDeUsoListarUsuarios {
  constructor(
    @inject('RepositorioDeUsuarios')
    private repositorioDeUsuarios: IRepositorioDeUsuarios,
  ) {}

  async execute({
    limite,
    pagina,
  }: ParametrosDeCasoDeUsoListarUsuario): Promise<PropriedadesDePaginacaoDeUsuario> {
    const pegar = limite
    const pular = (Number(pagina) - 1) * pegar
    return this.repositorioDeUsuarios.encontrarTudo({
      pagina,
      pular,
      pegar,
    })
  }
}
