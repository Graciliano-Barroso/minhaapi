import { TokenAtualizacao } from '@usuarios/entidades/TokenAtualizacao'

type CriarTokenAtualizacao = {
  usuario_id: string
  token: string
  expira: Date
  valido: boolean
}

export interface IRepositorioTokenAtualizacao {
  criar({
    usuario_id,
    token,
    expira,
    valido,
  }: CriarTokenAtualizacao): Promise<TokenAtualizacao>
  encontrarPeloToken(token: string): Promise<TokenAtualizacao | null>
  invalidar(token_atualizacao: TokenAtualizacao): Promise<void>
}
