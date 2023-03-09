import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('roles')
export class Papel {
  @PrimaryColumn()
  id?: string

  @Column()
  nome: string

  @Column()
  idade: number

  @CreateDateColumn()
  criado_em: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
