import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('tokens_atualizacao')
export class TokenAtualizacao {
  @PrimaryColumn()
  id?: string

  @Column()
  token: string

  @Column()
  usuario_id: string

  @Column()
  valido: boolean

  @Column()
  expira: Date

  @CreateDateColumn()
  criado_em: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
