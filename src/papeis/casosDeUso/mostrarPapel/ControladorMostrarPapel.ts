import { Request, Response } from 'express'
import { CasoDeUsoDeMostrarPapel } from './CasoDeUsoMostrarPapel'

export class ControladorMostrarPapel {
  constructor(private casoDeUsoDeMostrarPapel: CasoDeUsoDeMostrarPapel) {}

  async executar(request: Request, response: Response): Promise<Response> {
    const { id } = request.body
    const papel = await this.casoDeUsoDeMostrarPapel.execute({ id })
    return response.status(200).json(papel)
  }
}
