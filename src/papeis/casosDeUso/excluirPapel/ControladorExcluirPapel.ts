import { Request, Response } from 'express'
import { CasoDeUsoDeExcluirPapel } from './CasoDeUsoExcluirPapel'

export class ControladorExcluirPapel {
  constructor(private casoDeUsoDeExcluirPapel: CasoDeUsoDeExcluirPapel) {}

  async executar(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    await this.casoDeUsoDeExcluirPapel.execute({ id })
    return response.status(204).send()
  }
}
