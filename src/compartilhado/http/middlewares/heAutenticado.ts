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
    return response.status(401).json({
      erro: true,
      codigo: 'token.invalido',
      mensagem: 'O token de acesso não está presente',
    })
  }
  const token = cabecalhoAutenticacao.replace('Bearer ', '')
  if (!token) {
    return response.status(401).json({
      erro: true,
      codigo: 'token.invalido',
      mensagem: 'O token de acesso não está presente',
    })
  }
  try {
    const tokenDecodificado = verify(token, autencticacaoConfig.jwt.secret as Secret)
    const { sub } = tokenDecodificado as JwtPayloadProps
    request.usuario = { id: sub }
    return next()
  } catch {
    return response.status(401).json({
      erro: true,
      codigo: 'token.expirado',
      mensagem: 'O token de acesso não está presente',
    })
  }
}
