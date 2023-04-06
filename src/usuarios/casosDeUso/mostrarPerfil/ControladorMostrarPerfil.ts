import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoMostrarPerfil } from './CasoDeUsoMostrarPerfil'

export class ControladorMostrarPerfil {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoMostrarPerfil = container.resolve(CasoDeUsoMostrarPerfil)
    const usuarioId = request.usuario.id
    const usuario = await casoDeUsoMostrarPerfil.execute({
      usuarioId,
    })
    return response.json(instanceToInstance(usuario))
  }
}
