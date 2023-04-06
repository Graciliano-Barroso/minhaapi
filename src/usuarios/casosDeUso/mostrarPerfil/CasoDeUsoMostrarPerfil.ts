import { IRepositorioDeUsuarios } from '@usuarios/repositorios/IRepositorioDeUsuarios'
import { inject, injectable } from 'tsyringe'
import { Usuario } from '@usuarios/entidades/Usuario'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'

type ParametroMostrarPerfil = {
  usuarioId: string
}

@injectable()
export class CasoDeUsoMostrarPerfil {
  constructor(
    @inject('RepositorioDeUsuarios')
    private repositorioDeUsuarios: IRepositorioDeUsuarios,
  ) {}

  async execute({ usuarioId }: ParametroMostrarPerfil): Promise<Usuario> {
    const usuario = await this.repositorioDeUsuarios.encontrarPeloId(usuarioId)
    if (!usuario) {
      throw new ErroDeAplicativo('O usuario não foi encontrado', 404)
    }
    return usuario
  }
}
