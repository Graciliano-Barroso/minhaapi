import { dataSource } from '@compartilhado/typeorm/indice'
import { Papel } from '@papeis/entidades/Papel'
import { Repository } from 'typeorm'
import {
  CriarPapelDTO,
  IRepositorioDePapeis,
  PaginarParametros,
  PropriedadesDePaginacaoDePapeis,
} from './IRepositorioDePapeis'

export class RepositorioDePapeis implements IRepositorioDePapeis {
  private repositorio: Repository<Papel>

  constructor() {
    this.repositorio = dataSource.getRepository(Papel)
  }

  async criar({ nome, idade }: CriarPapelDTO): Promise<Papel> {
    const papel = this.repositorio.create({ nome, idade })
    return this.repositorio.save(papel)
  }

  async salvar(papel: Papel): Promise<Papel> {
    return this.repositorio.save(papel)
  }

  async excluir(papel: Papel): Promise<void> {
    await this.repositorio.remove(papel)
  }

  async encontrarTudo({
    pagina,
    pular,
    pegar,
  }: PaginarParametros): Promise<PropriedadesDePaginacaoDePapeis> {
    const [papeis, contar] = await this.repositorio
      .createQueryBuilder()
      .skip(pular)
      .take(pegar)
      .getManyAndCount()
    const resultado = {
      por_pagina: pegar,
      total: contar,
      pagina_atual: pagina,
      dados: papeis,
    }
    return resultado
  }

  async encontrarPeloNome(nome: string): Promise<Papel | null> {
    return this.repositorio.findOneBy({ nome })
  }

  async encontrarPeloId(id: string): Promise<Papel | null> {
    return this.repositorio.findOneBy({ id })
  }
}
