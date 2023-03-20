import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('usuarios')
export class Usuario {
  @PrimaryColumn()
  id?: string

  @Column()
  nome: string

  @Column()
  idade: number

  @Column()
  email: string

  @Column()
  senha: string

  @Column()
  isAdmin: boolean

  @Column()
  avatar?: string

  @CreateDateColumn()
  criado_em: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
