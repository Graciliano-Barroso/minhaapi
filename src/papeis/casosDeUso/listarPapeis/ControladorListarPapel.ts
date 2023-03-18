import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoListarPapel } from './CasoDeUsoListarPapel'

export class ControladorListarPapel {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoListarPapel = container.resolve(CasoDeUsoListarPapel)
    const pagina =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1
    const limite =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15
    const papeis = await casoDeUsoListarPapel.execute({
      pagina,
      limite,
    })
    return response.json(papeis)
  }
}
