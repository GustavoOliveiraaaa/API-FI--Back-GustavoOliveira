import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserGS {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Nome: string

    @Column()
    Tipo: string

    @Column()
    Peso: number

    @Column()
    Quantidade: number

    @Column()
    Preco: number
}
