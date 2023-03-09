import { DataSource } from 'typeorm'
import { CriarTabelaDePapeis1678368552706 } from './migracoes/1678368552706-CriarTabelaDePapeis'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CriarTabelaDePapeis1678368552706],
})
