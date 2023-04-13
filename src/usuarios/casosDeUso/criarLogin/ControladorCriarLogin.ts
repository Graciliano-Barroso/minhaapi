import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CasoDeUsoCriarLogin } from './CasoDeUsoCriarLogin'

export class ControladorCriarLogin {
  async executar(request: Request, response: Response): Promise<Response> {
    const casoDeUsoCriarLogin = container.resolve(CasoDeUsoCriarLogin)
    const { email, senha } = request.body
    const { usuario, tokenAcesso, tokenAtualizacao } = await casoDeUsoCriarLogin.execute({
      email,
      senha,
    })
    return response
      .status(201)
      .json(instanceToInstance({ usuario, tokenAcesso, tokenAtualizacao }))
  }
}
