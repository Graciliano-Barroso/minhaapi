import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class AdicionarPapelIdNaTabelaUsuarios1679322133077 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'usuarios',
      new TableColumn({
        name: 'papelId',
        type: 'uuid',
        isNullable: true,
      }),
    )
    await queryRunner.createForeignKey(
      'usuarios',
      new TableForeignKey({
        name: 'UsuariosPapeis',
        columnNames: ['papelId'],
        referencedTableName: 'papeis',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('usuarios', 'UsuariosPapeis')
    await queryRunner.dropColumn('usuarios', 'papelId')
  }
}
