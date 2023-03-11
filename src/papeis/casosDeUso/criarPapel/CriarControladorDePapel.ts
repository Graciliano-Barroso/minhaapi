import { Request, Response } from 'express'
import { CriarUsoDeCasoDePapel } from './CriarCasoDeUsoDePapel'

export class CriarControladorDePapeis {
  constructor(private criarUsoDeCasoDePapel: CriarUsoDeCasoDePapel) {}

  async executar(request: Request, response: Response): Promise<Response> {
    const { nome, idade } = request.body
    const papel = await this.criarUsoDeCasoDePapel.execute({ nome, idade })
    return response.status(201).json(papel)
  }
}
