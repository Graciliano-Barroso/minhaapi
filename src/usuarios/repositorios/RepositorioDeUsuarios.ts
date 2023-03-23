import { dataSource } from '@compartilhado/typeorm/indice'
import { Usuario } from '@usuarios/entidades/Usuario'
import { Repository } from 'typeorm'
import {
  CriarUsuarioDTO,
  IRepositorioDeUsuarios,
  PaginarParametros,
  PropriedadesDePaginacaoDeUsuario,
} from './IRepositorioDeUsuarios'

export class RepositorioDeUsuario implements IRepositorioDeUsuarios {
  private repositorio: Repository<Usuario>

  constructor() {
    this.repositorio = dataSource.getRepository(Usuario)
  }
  async criar({
    nome,
    idade,
    email,
    senha,
    isAdmin,
    papel,
  }: CriarUsuarioDTO): Promise<Usuario> {
    const usuario = this.repositorio.create({
      nome,
      idade,
      email,
      senha,
      isAdmin,
      papel,
    })
    return this.repositorio.save(usuario)
  }
  async salvar(usuario: Usuario): Promise<Usuario> {
    return this.repositorio.save(usuario)
  }
  async encontrarTudo({
    pagina,
    pular,
    pegar,
  }: PaginarParametros): Promise<PropriedadesDePaginacaoDeUsuario> {
    const [usuarios, count] = await this.repositorio
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.papel', 'papel')
      .skip(pular)
      .take(pegar)
      .getManyAndCount()
    const result = {
      por_pagina: pegar,
      total: count,
      pagina_atual: pagina,
      dados: usuarios,
    }
    return result
  }

  async encontrarPeloId(id: string): Promise<Usuario | null> {
    return this.repositorio.findOneBy({ id })
  }

  async encontrarPeloNome(nome: string): Promise<Usuario | null> {
    return this.repositorio.findOneBy({ nome })
  }

  async encontrarPeloEmail(email: string): Promise<Usuario | null> {
    return this.repositorio.findOneBy({ email })
  }

  async excluir(usuario: Usuario): Promise<void> {
    await this.repositorio.remove(usuario)
  }
}
