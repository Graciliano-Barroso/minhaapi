import multer, { StorageEngine } from 'multer'
import path from 'node:path'
import crypto from 'node:crypto'

type CarregarConfig = {
  diretorio: string
  armazenar: StorageEngine
}

const carregarPasta = path.resolve(__dirname, '..', '..', 'carregados')

export default {
  diretorio: carregarPasta,
  armazenar: multer.diskStorage({
    destination: carregarPasta,
    filename(request, file, callback) {
      const hashDoArquivo = crypto.randomBytes(10).toString('hex')
      const nomeDoArquivo = `${hashDoArquivo}_${file.originalname}`
      callback(null, nomeDoArquivo)
    },
  }),
} as CarregarConfig
