import { Request, Response } from 'express'
import { CasoDeUsoDeExibirPapel } from './CasoDeUsoExibirPapel'

export class ControladorExibirPapel {
  constructor(private casoDeUsoDeExibirPapel: CasoDeUsoDeExibirPapel) {}

  async executar(request: Request, response: Response): Promise<Response> {
    const { id } = request.body
    const papel = await this.casoDeUsoDeExibirPapel.execute({ id })
    return response.status(200).json(papel)
  }
}
