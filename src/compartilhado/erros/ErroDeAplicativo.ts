export class ErroDeAplicativo {
  public readonly mensagem: string
  public readonly codigoDeStatus: number

  constructor(message: string, statusCode = 400) {
    this.mensagem = message
    this.codigoDeStatus = statusCode
  }
}
