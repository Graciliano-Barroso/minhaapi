import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { rotas } from './rotas/indice'
import { ErroDeAplicativo } from '@compartilhado/erros/ErroDeAplicativo'

const app = express()
app.use(cors())
app.use(express.json())

app.use(rotas)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ErroDeAplicativo) {
      return response.status(error.codigoDeStatus).json({
        status: 'erro',
        message: error.message,
      })
    }
    console.log(error)
    return response.status(500).json({
      status: 'erro',
      message: 'Erro interno do servidor',
    })
  },
)

app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT}! 🏆`)
})
