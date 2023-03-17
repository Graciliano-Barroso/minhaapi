import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CasoDeUsoDeExcluirPapel } from './CasoDeUsoExcluirPapel'

export class ControladorExcluirPapel {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoDeExcluirPapel = container.resolve(CasoDeUsoDeExcluirPapel)
    const { id } = request.params
    await casoDeUsoDeExcluirPapel.execute({ id })
    return response.status(204).send()
  }
}
