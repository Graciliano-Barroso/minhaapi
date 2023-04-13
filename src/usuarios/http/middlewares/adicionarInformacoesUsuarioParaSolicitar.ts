import { NextFunction, Request, Response } from 'express'
import { decode } from 'jsonwebtoken'

type JwtPayloadProps = {
  sub: string
}

export const adicionarInformacoesUsuarioParaSolicitar = (
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
    const tokenDecodificado = decode(token)
    const { sub } = tokenDecodificado as JwtPayloadProps
    request.usuario = { id: sub }
    return next()
  } catch {
    return response.status(401).json({
      erro: true,
      codigo: 'token.invalido',
      mensagem: 'O token de acesso não está presente',
    })
  }
}
