import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { RepositorioDePapeis } from '@papeis/repositorios/RepositorioDePapeis'
import { Request, Response } from 'express'
import { CriarUsoDeCasoDePapel } from './CriarUsoDeCasoDePapel'

export class CriarControladorDePapeis {
  constructor(private criarUsoDeCasoDePapel: CriarUsoDeCasoDePapel) {}

  executar(request: Request, response: Response): Response {
    const { nome, idade } = request.body
    const papel = this.criarUsoDeCasoDePapel.execute({ nome, idade })
    return response.status(201).json(papel)
  }
}
