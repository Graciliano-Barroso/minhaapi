import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoAtualizarPapel } from './CasoDeUsoAtualizarPapel'

export class ControladorAtualizarPapel {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoAtualizarPapel = container.resolve(CasoDeUsoAtualizarPapel)
    const { id } = request.params
    const { nome, idade } = request.body
    const papel = await casoDeUsoAtualizarPapel.execute({ id, nome, idade })

    return response.status(200).json(papel)
  }
}
