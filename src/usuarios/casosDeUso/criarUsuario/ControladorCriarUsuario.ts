import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoCriarUsuario } from './CasoDeUsoCriarUsuario'

export class ControladorCriarUsuario {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoCriarUsuario = container.resolve(CasoDeUsoCriarUsuario)
    const { nome, idade, email, senha, isAdmin, papelId } = request.body
    const usuario = await casoDeUsoCriarUsuario.execute({
      nome,
      idade,
      email,
      senha,
      isAdmin,
      papelId,
    })
    return response.status(201).json(usuario)
  }
}
