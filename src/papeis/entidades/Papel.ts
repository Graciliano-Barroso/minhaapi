import { v4 as uuidv4 } from 'uuid'

export class Papel {
  id?: string
  nome: string
  idade: number
  criado_em: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
