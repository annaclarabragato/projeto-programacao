import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;
}
