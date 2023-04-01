import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import jwtConfig from '@config/autenticacao'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { Usuario } from '@usuarios/entidades/Usuario'
import { IRepositorioDeUsuarios } from '@usuarios/repositorios/IRepositorioDeUsuarios'
import { sign } from 'jsonwebtoken'

type CriarLoginDTO = {
  email: string
  senha: string
}
type IResponse = {
  usuario: Usuario
  token: string
}

@injectable()
export class CasoDeUsoCriarLogin {
  constructor(
    @inject('RepositorioDeUsuarios')
    private repositorioDeUsuarios: IRepositorioDeUsuarios,
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
    const token = sign({}, jwtConfig.jwt.secret, {
      subject: usuario.id,
      expiresIn: jwtConfig.jwt.expiresIn,
    })
    return {
      usuario,
      token,
    }
  }
}
