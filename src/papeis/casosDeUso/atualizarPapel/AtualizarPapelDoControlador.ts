import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AtualizarPapelDeCasoDeUso } from './AtualizarPapelDeCasoDeUso'

export class AtualizarPapelDoControlador {
  async executar(request: Request, response: Response): Promise<Response> {
    const atualizarPapelDeCasoDeUso = container.resolve(AtualizarPapelDeCasoDeUso)
    const { id } = request.body
    const { nome, idade } = request.body
    const papel = await atualizarPapelDeCasoDeUso.execute({ id, nome, idade })

    return response.status(200).json(papel)
  }
}
