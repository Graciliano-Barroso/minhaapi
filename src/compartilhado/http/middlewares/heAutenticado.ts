import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import autencticacaoConfig from '@config/autenticacao'

export const heAutenticado = (
  solicitar: Request,
  resposta: Response,
  proximo: NextFunction,
) => {
  const cabecalhoAutenticacao = solicitar.headers.authorization
  if (!cabecalhoAutenticacao) {
    throw new ErroDeAplicativo('Falha ao ferificar o token de acesso', 401)
  }
  const token = cabecalhoAutenticacao.replace('Bearer ', '')
  try {
    verify(token, autencticacaoConfig.jwt.secret as Secret)
    return proximo()
  } catch {
    throw new ErroDeAplicativo('Token de autenticação inválido', 401)
  }
}
