import { Papel } from '@papeis/entidades/Papel'

type CriarPapelDTO = {
  nome: string
  idade: number
}
export class RepositorioDePapeis {
  private papeis: Papel[]

  constructor() {
    this.papeis = []
  }
  create({ nome, idade }: CriarPapelDTO): Papel {
    const papel = new Papel()

    Object.assign(papel, {
      nome,
      idade,
      criado_em: new Date(),
    })

    this.papeis.push(papel)
    return papel
  }

  findAll(): Papel[] {
    return this.papeis
  }
}
