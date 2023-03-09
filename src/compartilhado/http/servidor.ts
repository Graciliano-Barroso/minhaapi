import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { dataSource } from '@compartilhado/typeorm/indice'

dataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}! 🏆`)
  })
})
