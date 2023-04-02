import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import autencticacaoConfig from '@config/autenticacao'

type JwtPayloadProps = {
  sub: string
}

export const heAutenticado = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const cabecalhoAutenticacao = request.headers.authorization
  if (!cabecalhoAutenticacao) {
    throw new ErroDeAplicativo('Falha ao ferificar o token de acesso', 401)
  }
  const token = cabecalhoAutenticacao.replace('Bearer ', '')
  try {
    const tokenDecodificado = verify(token, autencticacaoConfig.jwt.secret as Secret)
    const { sub } = tokenDecodificado as JwtPayloadProps
    request.usuario = { id: sub }
    return next()
  } catch {
    throw new ErroDeAplicativo('Token de autenticação inválido', 401)
  }
}
