import { Papel } from '@papeis/entidades/Papel'
import { Exclude } from 'class-transformer'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
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
  @Exclude()
  senha: string

  @Column()
  isAdmin: boolean

  @Column()
  avatar?: string

  @ManyToOne(() => Papel, {
    cascade: true,
  })
  papel: Papel

  @CreateDateColumn()
  criado_em: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
