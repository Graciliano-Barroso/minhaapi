import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'
import { IRepositorioDeUsuarios } from '@usuarios/repositorios/IRepositorioDeUsuarios'
import { inject, injectable } from 'tsyringe'
import { Usuario } from '@usuarios/entidades/Usuario'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { hash } from 'bcryptjs'

type CriarUsuarioDTO = {
  nome: string
  idade: number
  email: string
  senha: string
  isAdmin: boolean
  papelId: string
}

@injectable()
export class CasoDeUsoCriarUsuarios {
  constructor(
    @inject('RepositorioDeUsuarios')
    private repositorioDeUsuarios: IRepositorioDeUsuarios,
    @inject('RepositorioDePapeis') private repositorioDePapeis: IRepositorioDePapeis,
  ) {}

  async execute({
    nome,
    idade,
    email,
    senha,
    isAdmin,
    papelId,
  }: CriarUsuarioDTO): Promise<Usuario> {
    const existeEmail = await this.repositorioDeUsuarios.encontrarPeloEmail(email)
    if (existeEmail) {
      throw new ErroDeAplicativo('O endereço de e-mail já está em uso')
    }
    const papel = await this.repositorioDePapeis.encontrarPeloId(papelId)
    if (!papel) {
      throw new ErroDeAplicativo('Papel não encontrado', 404)
    }
    const senhaComHash = await hash(senha, 10)
    const usuario = await this.repositorioDeUsuarios.criar({
      nome,
      idade,
      email,
      senha: senhaComHash,
      isAdmin,
      papel,
    })
    return usuario
  }
}
