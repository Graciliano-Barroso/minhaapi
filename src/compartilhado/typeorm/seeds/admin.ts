import { v4 as uuidv4 } from 'uuid'
import { dataSource } from '@compartilhado/typeorm/indice'
import { hash } from 'bcryptjs'

async function criar() {
  const conexao = await dataSource.initialize()
  // Cria Papel
  const papelId = uuidv4()
  await conexao.query(`
    INSERT INTO papeis(id, nome, idade)
    values('${papelId}', 'T.I.', 49)
  `)
  // Cria Usuario
  const usuarioId = uuidv4()
  const senha = await hash('1234', 10)
  await conexao.query(`
    INSERT INTO usuarios(id, nome, idade, email, senha, "isAdmin", papelId)
    values('${usuarioId}', 'admin', 49, 'a@a.com', '${senha}', true, '${papelId}')
  `)
  await conexao.destroy()
}

criar().then(() => console.log('Criado usuário admin 👍'))
