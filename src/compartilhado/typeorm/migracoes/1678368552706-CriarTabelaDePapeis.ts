import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CriarTabelaDePapeis1678368552706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'papeis',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'string',
            isUnique: true,
          },
          {
            name: 'idade',
            type: 'number',
            isUnique: false,
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
    await queryRunner.dropTable('papeis')
  }
}
