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

  encontrarTudo(): Papel[] {
    return this.papeis
  }

  encontrarPeloNome(nome: string): Papel | undefined {
    return this.papeis.find(papel => papel.nome === nome)
  }
}
