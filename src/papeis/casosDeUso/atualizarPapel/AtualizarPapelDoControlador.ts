import { Request, Response } from 'express'
import { AtualizarPapelDeCasoDeUso } from './AtualizarPapelDeCasoDeUso'

export class AtualizarPapelDoControlador {
  constructor(private atualizarPapelDeCasoDeUso: AtualizarPapelDeCasoDeUso) {}

  async executar(request: Request, response: Response): Promise<Response> {
    const { id } = request.body
    const { nome, idade } = request.body
    const papel = await this.atualizarPapelDeCasoDeUso.execute({ id, nome, idade })

    return response.status(200).json(papel)
  }
}
