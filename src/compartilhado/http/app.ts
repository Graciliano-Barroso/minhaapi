import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { rotas } from './rotas/indice'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'
import swaggerFile from '../../swagger.json'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(rotas)

app.use(
  (erro: Error, request: Request, response: Response, next: NextFunction) => {
    if (erro instanceof ErroDeAplicativo) {
      return response.status(erro.codigoDeStatus).json({
        estado: 'erro',
        mensagem: erro.mensagem,
      })
    }
    console.log(erro)
    return response.status(500).json({
      estado: 'erro',
      mensagem: 'Erro interno do servidor',
    })
  },
)

export { app }
