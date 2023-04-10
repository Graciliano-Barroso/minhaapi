import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CriarTabelaTokensAtualizacao1681145627128 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tokens_atualizacao',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'usuario_id',
            type: 'string',
          },
          {
            name: 'token',
            type: 'string',
            isUnique: true,
          },
          {
            name: 'valido',
            type: 'boolean',
            default: true,
          },
          {
            name: 'expira',
            type: 'timestamp',
          },
          {
            name: 'criado_em',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            name: 'TokensAtualizacao',
            referencedTableName: 'usuarios',
            referencedColumnNames: ['id'],
            columnNames: ['usuario_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tokens_atualizacao')
  }
}
