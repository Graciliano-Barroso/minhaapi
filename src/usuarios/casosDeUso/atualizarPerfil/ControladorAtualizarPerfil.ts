import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoAtualizarPerfil } from './CasoDeUsoAtualizarPerfil'

export class ControladorAtualizarPerfil {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoAtualizarPerfil = container.resolve(CasoDeUsoAtualizarPerfil)
    const usuarioId = request.usuario.id
    const { nome, idade, email, senha, senha_antiga } = request.body
    const usuario = await casoDeUsoAtualizarPerfil.execute({
      usuarioId,
      nome,
      idade,
      email,
      senha,
      senha_antiga,
    })
    return response.json(instanceToInstance(usuario))
  }
}
