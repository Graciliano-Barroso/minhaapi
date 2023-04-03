import { inject, injectable } from 'tsyringe'
import path from 'node:path'
import fs from 'node:fs'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Usuario } from '@usuarios/entidades/Usuario'
import { IRepositorioDeUsuarios } from '@usuarios/repositorios/IRepositorioDeUsuarios'
import carregarConfig from '@config/carregar'

type CarregarAvatarDTO = {
  usuarioId: string
  nomeArquivoAvatar: string
}

@injectable()
export class CasoDeUsoCarregarAvatar {
  constructor(
    @inject('RepositorioDeUsuarios')
    private repositorioDeUsuarios: IRepositorioDeUsuarios,
  ) {}

  async execute({ usuarioId, nomeArquivoAvatar }: CarregarAvatarDTO): Promise<Usuario> {
    const idUsuario = await this.repositorioDeUsuarios.encontrarPeloId(usuarioId)
    if (!idUsuario) {
      throw new ErroDeAplicativo(
        'Somente usuários autenticados podem alterar o avatar',
        401,
      )
    }
    if (idUsuario.avatar) {
      const caminhoArquivoAvatarUsuario = path.join(
        carregarConfig.diretorio,
        idUsuario.avatar,
      )
      const existeAquivoAvatarUsuario = await fs.promises.stat(
        caminhoArquivoAvatarUsuario,
      )
      if (existeAquivoAvatarUsuario) {
        await fs.promises.unlink(caminhoArquivoAvatarUsuario)
      }
    }
    idUsuario.avatar = nomeArquivoAvatar
    return this.repositorioDeUsuarios.salvar(idUsuario)
  }
}
