import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoDeExibirPapel } from './CasoDeUsoExibirPapel'

export class ControladorExibirPapel {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoDeExibirPapel = container.resolve(CasoDeUsoDeExibirPapel)
    const { id } = request.body
    const papel = await casoDeUsoDeExibirPapel.execute({ id })
    return response.status(200).json(papel)
  }
}
