import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoExibirPapel } from './CasoDeUsoExibirPapel'

export class ControladorExibirPapel {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoExibirPapel = container.resolve(CasoDeUsoExibirPapel)
    const { id } = request.params
    const papel = await casoDeUsoExibirPapel.execute({ id })
    return response.status(200).json(papel)
  }
}
