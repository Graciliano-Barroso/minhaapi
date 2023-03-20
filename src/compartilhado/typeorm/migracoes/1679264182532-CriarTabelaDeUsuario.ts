import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CriarTabelaDeUsuario1679264182532 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'string',
          },
          {
            name: 'idade',
            type: 'number',
          },
          {
            name: 'email',
            type: 'string',
            isUnique: true,
          },
          {
            name: 'senha',
            type: 'string',
          },
          {
            name: 'avatar',
            type: 'string',
            isNullable: true,
          },
          {
            name: 'isAdmin',
            type: 'boolean',
            default: false,
          },
          {
            name: 'criado_em',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios')
  }
}

// AdicionarPapelIdNaTabelaUsuarios

// await queryRunner.addColumn(
//       'usuarios',
//       new TableColumn({
//         name: 'papelId',
//         type: 'uuid',
//         isNullable: true,
//       }),
//     )
//     await queryRunner.createForeignKey(
//       'usuarios',
//       new TableForeignKey({
//         name: 'UsuariosPapeis',
//         columnNames: ['papelId'],
//         referencedTableName: 'papeis',
//         referencedColumnNames: ['id'],
//         onDelete: 'SET NULL',
//       }),
//     )

// await queryRunner.dropForeignKey('usuarios', 'UsuariosPapeis')
// await queryRunner.dropColumn('usuarios', 'papelId')
