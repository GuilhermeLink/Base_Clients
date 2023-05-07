import { MigrationInterface, QueryRunner } from "typeorm";

export class Newmigrat1683499291915 implements MigrationInterface {
    name = 'Newmigrat1683499291915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdm"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isAdm" boolean NOT NULL DEFAULT false`);
    }

}
