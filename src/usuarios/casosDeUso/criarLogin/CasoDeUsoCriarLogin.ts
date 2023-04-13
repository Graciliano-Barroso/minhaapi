import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import jwtConfig from '@config/autenticacao'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Usuario } from '@usuarios/entidades/Usuario'
import { IRepositorioDeUsuarios } from '@usuarios/repositorios/IRepositorioDeUsuarios'
import { sign } from 'jsonwebtoken'
import { IRepositorioTokenAtualizacao } from '@usuarios/repositorios/IRepositorioTokenAtualizacao'

type CriarLoginDTO = {
  email: string
  senha: string
}
type IResponse = {
  usuario: Usuario
  tokenAcesso: string
  tokenAtualizacao: string
}

@injectable()
export class CasoDeUsoCriarLogin {
  constructor(
    @inject('RepositorioDeUsuarios')
    private repositorioDeUsuarios: IRepositorioDeUsuarios,
    @inject('RepositorioTokenAtualizacao')
    private repositorioTokenAtualizacao: IRepositorioTokenAtualizacao,
  ) {}

  async execute({ email, senha }: CriarLoginDTO): Promise<IResponse> {
    const usuario = await this.repositorioDeUsuarios.encontrarPeloEmail(email)
    if (!usuario) {
      throw new ErroDeAplicativo('O endereço de e-mail ou a senha estão incorretos', 401)
    }
    const senhaConfirmada = await compare(senha, usuario.senha)
    if (!senhaConfirmada) {
      throw new ErroDeAplicativo('O endereço de e-mail ou a senha estão incorretos', 401)
    }
    const tokenAcesso = sign({}, jwtConfig.jwt.secret, {
      subject: usuario.id,
      expiresIn: jwtConfig.jwt.expiresIn,
    })
    const expira = new Date(Date.now() + jwtConfig.refreshToken.duration)
    const tokenAtualizacao = sign({}, jwtConfig.refreshToken.secret, {
      subject: usuario.id,
      expiresIn: jwtConfig.refreshToken.expiresIn,
    })
    await this.repositorioTokenAtualizacao.criar({
      usuario_id: usuario.id,
      token: tokenAtualizacao,
      expira,
      valido: true,
    })
    return {
      usuario,
      tokenAcesso,
      tokenAtualizacao,
    }
  }
}
