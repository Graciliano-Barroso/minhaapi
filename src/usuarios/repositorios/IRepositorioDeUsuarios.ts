import { Papel } from '@papeis/entidades/Papel'
import { Usuario } from '@usuarios/entidades/Usuario'

export type CriarUsuarioDTO = {
  nome: string
  idade: number
  email: string
  senha: string
  isAdmin: boolean
  papel: Papel
}

export type PaginarParametros = {
  pagina: number
  pular: number
  pegar: number
}

export type PropriedadesDePaginacaoDeUsuario = {
  por_pagina: number
  total: number
  pagina_atual: number
  dados: Usuario[]
}

export interface IRepositorioDeUsuarios {
  criar({ nome, idade, email, senha, isAdmin, papel }: CriarUsuarioDTO): Promise<Usuario>
  salvar(usuario: Usuario): Promise<Usuario>
  encontrarTudo({
    pagina,
    pular,
    pegar,
  }: PaginarParametros): Promise<PropriedadesDePaginacaoDeUsuario>
  encontrarPeloId(id: string): Promise<Usuario | null>
  encontrarPeloNome(nome: string): Promise<Usuario | null>
  encontrarPeloEmail(email: string): Promise<Usuario | null>
  excluir(usuario: Usuario): Promise<void>
}
