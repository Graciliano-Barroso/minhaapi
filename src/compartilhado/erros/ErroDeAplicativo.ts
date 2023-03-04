export class ErroDeAplicativo {
  public readonly mensagem: string
  public readonly codigoDeStatus: number

  constructor(mensagem: string, codigoDoEstado = 400) {
    this.mensagem = mensagem
    this.codigoDeStatus = codigoDoEstado
  }
}
