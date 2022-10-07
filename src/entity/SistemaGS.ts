import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaGS {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Nome: string

}
