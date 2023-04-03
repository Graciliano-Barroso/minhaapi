import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoCarregarAvatar } from './CasoDeUsoCarregarAvatar'

export class ControladorCarregarAvatar {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoCarregarAvatar = container.resolve(CasoDeUsoCarregarAvatar)
    const usuario = await casoDeUsoCarregarAvatar.execute({
      usuarioId: request.usuario.id,
      nomeArquivoAvatar: request.file.filename,
    })
    return response.json(instanceToInstance(usuario))
  }
}
