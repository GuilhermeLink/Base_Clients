import { hashSync } from 'bcryptjs'
import { Exclude } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, DeleteDateColumn } from 'typeorm'

@Entity()
class User {

    @Column({ length: 80 })
    name: string

    @Column({ length: 80, unique: true })
    email: string

    @Column({ length: 120 })
    @Exclude()
    password: string

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

    @Column()
    phone: string

    @Column({ default: false })
    isAdm?: boolean

    @Column({ default: true })
    isActive?: boolean

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date

    @DeleteDateColumn()
    deletedAt?: Date

    @PrimaryGeneratedColumn('uuid')
    id?: string

}

export { User }
