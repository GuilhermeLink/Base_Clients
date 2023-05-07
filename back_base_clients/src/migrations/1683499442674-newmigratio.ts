import { MigrationInterface, QueryRunner } from "typeorm";

export class Newmigratio1683499442674 implements MigrationInterface {
    name = 'Newmigratio1683499442674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isAdm" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdm"`);
    }

}
