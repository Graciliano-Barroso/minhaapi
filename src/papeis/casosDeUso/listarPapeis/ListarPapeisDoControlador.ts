import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListarPapeisDeCasoDeUso } from './ListarPapeisDeCasoDeUso'

export class ListarPapeisDoControlador {
  async executar(request: Request, response: Response): Promise<Response> {
    const listarPapeisDeCasoDeUso = container.resolve(ListarPapeisDeCasoDeUso)
    const pagina =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1
    const limite =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15
    const papeis = await listarPapeisDeCasoDeUso.execute({
      pagina,
      limite,
    })
    return response.json(papeis)
  }
}
