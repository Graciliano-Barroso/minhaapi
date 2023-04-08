import { IRepositorioDePapeis } from '@papeis/repositorios/IRepositorioDePapeis'
import { IRepositorioDeUsuarios } from '@usuarios/repositorios/IRepositorioDeUsuarios'
import { inject, injectable } from 'tsyringe'
import { Usuario } from '@usuarios/entidades/Usuario'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { compare, hash } from 'bcryptjs'

type AtualizarPerfilDTO = {
  usuarioId: string
  nome: string
  idade: number
  email: string
  senha?: string
  senha_antiga?: string
}

@injectable()
export class CasoDeUsoAtualizarPerfil {
  constructor(
    @inject('RepositorioDeUsuarios')
    private repositorioDeUsuarios: IRepositorioDeUsuarios,
  ) {}

  async execute({
    usuarioId,
    nome,
    idade,
    email,
    senha,
    senha_antiga,
  }: AtualizarPerfilDTO): Promise<Usuario> {
    const usuario = await this.repositorioDeUsuarios.encontrarPeloId(usuarioId)
    if (!usuario) {
      throw new ErroDeAplicativo('O usuário não foi encontrado')
    }
    const atualizarEmailUsuario = await this.repositorioDeUsuarios.encontrarPeloEmail(
      email,
    )
    if (atualizarEmailUsuario && atualizarEmailUsuario.id !== usuarioId) {
      throw new ErroDeAplicativo('Já existe um usuário com este e-mail')
    }
    if (senha && senha_antiga) {
      const verificarSenhaAntiga = await compare(senha_antiga, usuario.senha)
      if (!verificarSenhaAntiga) {
        throw new ErroDeAplicativo('Senha antiga não confere')
      }
      usuario.senha = await hash(senha, 10)
    }
    usuario.nome = nome
    usuario.idade = idade
    usuario.email = email
    return this.repositorioDeUsuarios.salvar(usuario)
  }
}
