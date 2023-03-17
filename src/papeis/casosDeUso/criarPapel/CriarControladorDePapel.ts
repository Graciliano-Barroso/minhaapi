import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CriarCasoDeUsoDePapel } from './CriarCasoDeUsoDePapel'

export class CriarControladorDePapeis {
  async executar(request: Request, response: Response): Promise<Response> {
    const criarCasoDeUsoDePapel = container.resolve(CriarCasoDeUsoDePapel)
    const { nome, idade } = request.body
    const papel = await criarCasoDeUsoDePapel.execute({ nome, idade })
    return response.status(201).json(papel)
  }
}
