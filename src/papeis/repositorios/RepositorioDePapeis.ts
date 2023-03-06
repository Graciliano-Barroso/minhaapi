import { Papel } from '@papeis/entidades/Papel'

type CriarPapelDTO = {
  nome: string
  idade: number
}
export class RepositorioDePapeis {
  private papeis: Papel[]
  private static INSTANCIA: RepositorioDePapeis

  private constructor() {
    this.papeis = []
  }

  public static obterInstancia(): RepositorioDePapeis {
    if (!RepositorioDePapeis.INSTANCIA) {
      RepositorioDePapeis.INSTANCIA = new RepositorioDePapeis()
    }
    return RepositorioDePapeis.INSTANCIA
  }
  criar({ nome, idade }: CriarPapelDTO): Papel {
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
