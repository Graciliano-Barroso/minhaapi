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
            isPrimary: true,
          },
          {
            name: 'email',
            type: 'string',
            isPrimary: true,
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
