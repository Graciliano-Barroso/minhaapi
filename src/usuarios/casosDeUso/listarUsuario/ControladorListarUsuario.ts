import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoListarUsuarios } from './CasoDeUsoListarUsuario'

export class ControladorListarUsuarios {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoListarUsuarios = container.resolve(CasoDeUsoListarUsuarios)
    const pagina =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1
    const limite =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15
    const usuarios = await casoDeUsoListarUsuarios.execute({
      pagina,
      limite,
    })
    return response.json(usuarios)
  }
}
