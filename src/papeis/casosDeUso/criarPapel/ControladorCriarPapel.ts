import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoCriarPapel } from './CasoDeUsoCriarPapel'

export class ControladorCriarPapel {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoCriarPapel = container.resolve(CasoDeUsoCriarPapel)
    const { nome, idade } = request.body
    const papel = await casoDeUsoCriarPapel.execute({ nome, idade })
    return response.status(201).json(papel)
  }
}
