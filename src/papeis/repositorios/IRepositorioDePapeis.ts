import { Papel } from '@papeis/entidades/Papel'

export type CriarPapelDTO = {
  nome: string
  idade: number
}

export type PaginarParametros = {
  pagina: number
  pular: number
  pegar: number
}

export type PropriedadesDePaginacaoDePapeis = {
  por_pagina: number
  total: number
  pagina_atual: number
  dados: Papel[]
}

export interface IRepositorioDePapeis {
  criar({ nome, idade }: CriarPapelDTO): Promise<Papel>
  salvar(papel: Papel): Promise<Papel>
  encontrarTudo({
    pagina,
    pular,
    pegar,
  }: PaginarParametros): Promise<PropriedadesDePaginacaoDePapeis>
  encontrarPeloId(id: string): Promise<Papel | null>
  encontrarPeloNome(nome: string): Promise<Papel | null>
  excluir(papel: Papel): Promise<void>
}
