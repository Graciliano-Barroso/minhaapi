import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { dataSource } from '@compartilhado/typeorm/indice'
import { TokenAtualizacao } from '@usuarios/entidades/TokenAtualizacao'
import { Repository } from 'typeorm'
import {
  CriarTokenAtualizacao,
  IRepositorioTokenAtualizacao,
} from './IRepositorioTokenAtualizacao'

export class RepositorioTokenAtualizacao implements IRepositorioTokenAtualizacao {
  private repositorio: Repository<TokenAtualizacao>

  constructor() {
    this.repositorio = dataSource.getRepository(TokenAtualizacao)
  }

  async criar({
    usuario_id,
    token,
    expira,
    valido,
  }: CriarTokenAtualizacao): Promise<TokenAtualizacao> {
    const tokenAtualizacao = this.repositorio.create({
      usuario_id,
      token,
      expira,
      valido,
    })
    return this.repositorio.save(tokenAtualizacao)
  }
  async encontrarPeloToken(token: string): Promise<TokenAtualizacao> {
    return this.repositorio.findOneBy({ token })
  }
  async invalidar(token_atualizacao: TokenAtualizacao): Promise<void> {
    const tokenAtualizacao = await this.encontrarPeloToken(token_atualizacao.token)
    if (!tokenAtualizacao) {
      throw new ErroDeAplicativo('Token de atualização não foi encontrado', 404)
    }
    tokenAtualizacao.valido = false
    await this.repositorio.save(tokenAtualizacao)
  }
}
