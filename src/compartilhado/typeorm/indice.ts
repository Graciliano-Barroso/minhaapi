import { Papel } from '@papeis/entidades/Papel'
import { TokenAtualizacao } from '@usuarios/entidades/TokenAtualizacao'
import { Usuario } from '@usuarios/entidades/Usuario'
import { DataSource } from 'typeorm'
import { CriarTabelaDePapeis1678368552706 } from './migracoes/1678368552706-CriarTabelaDePapeis'
import { CriarTabelaDeUsuario1679264182532 } from './migracoes/1679264182532-CriarTabelaDeUsuario'
import { AdicionarPapelIdNaTabelaUsuarios1679322133077 } from './migracoes/1679322133077-AdicionarPapelIdNaTabelaUsuarios'
import { CriarTabelaTokensAtualizacao1681145627128 } from './migracoes/1681145627128-CriarTabelaTokensAtualizacao'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Papel, Usuario, TokenAtualizacao],
  migrations: [
    CriarTabelaDePapeis1678368552706,
    CriarTabelaDeUsuario1679264182532,
    AdicionarPapelIdNaTabelaUsuarios1679322133077,
    CriarTabelaTokensAtualizacao1681145627128,
  ],
})
