import { Papel } from '@papeis/entidades/Papel'
import { DataSource } from 'typeorm'
import { CriarTabelaDePapeis1678368552706 } from './migracoes/1678368552706-CriarTabelaDePapeis'
import { CriarTabelaDeUsuario1679264182532 } from './migracoes/1679264182532-CriarTabelaDeUsuario'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Papel],
  migrations: [CriarTabelaDePapeis1678368552706, CriarTabelaDeUsuario1679264182532],
})
